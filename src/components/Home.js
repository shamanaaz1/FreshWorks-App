import React from "react";
import { connect } from "react-redux";
import moment from "moment";

import Form from "../components/Form";
import { postDucksFedAction, hideMessages } from "../actions/ducksFedActions";

class Home extends React.Component {
  state = {
    formData: {
      name: "",
      personId: "",
      ducksFedPlace: "",
      ducksCount: "",
      ducksFood: [],
      ducksFoodQuantity: "",
      date: "",
      repeatDays: 0,
      checked: false
    },
    formClass: "",
    message: false,
    storeData: [],
    uniqueTime: ""
  };

  handleChange = e => {
    switch (e.target.name) {
      case "name":
        this.setState({
          ...this.state,
          formData: {
            ...this.state.formData,
            name: e.target.value
          }
        });
        break;
      case "id":
        this.setState({
          ...this.state,
          formData: {
            ...this.state.formData,
            personId: e.target.value
          }
        });
        break;
      case "ducksFedPlace":
        this.setState({
          ...this.state,
          formData: {
            ...this.state.formData,
            ducksFedPlace: e.target.value
          }
        });
        break;
      case "ducksCount":
        this.setState({
          ...this.state,
          formData: {
            ...this.state.formData,
            ducksCount: e.target.value
          }
        });
        break;
      case "ducksFood":
        this.setState({
          ...this.state,
          formData: {
            ...this.state.formData,
            ducksFood: [...this.state.formData.ducksFood, e.target.value]
          }
        });
        break;
      case "ducksFoodQuantity":
        this.setState({
          ...this.state,
          formData: {
            ...this.state.formData,
            ducksFoodQuantity: e.target.value
          }
        });
        break;
      case "custom-checkbox":
        this.setState({
          ...this.state,
          formData: {
            ...this.state.formData,
            checked: e.target.checked
          }
        });
        break;
      default:
        return null;
    }
  };

  handleDate = date => {
    this.setState({
      ...this.state,
      formData: {
        ...this.state.formData,
        date
      }
    });
  };

  handleSelectedDays = e => {
    this.setState({
      ...this.state,
      formData: {
        ...this.state.formData,
        repeatDays: e.target.value
      }
    });
  };

  handleFormData = e => {
    const {
      name,
      date,
      ducksCount,
      ducksFedPlace,
      ducksFoodQuantity,
      ducksFood,
      personId,
      repeatDays
    } = this.state.formData;
    const { actions } = this.props;
    e.preventDefault();
    if (e.target.checkValidity() === false) {
      this.setState({
        ...this.state,
        formClass: "was-validated"
      });
    } else {
      const data = {
        name,
        personId,
        ducksFedPlace,
        ducksCount,
        ducksFood,
        ducksFoodQuantity,
        date: moment(date).unix(),
        repeatDays: repeatDays ? repeatDays : 0
      };
      actions.postDucksFedForm(data);
      if (repeatDays !== 0) {
        const storeToLocal = {
          storeData: [...this.state.storeData, data],
          uniqueTime: moment(date).unix(),
          repeatDays
        };
        const storageData =
          JSON.parse(localStorage.getItem("userInteractionData")) || [];
        localStorage.setItem(
          "userInteractionData",
          JSON.stringify([...storageData, storeToLocal])
        );
      }
      this.setState(
        {
          ...this.state,
          formData: {
            ...this.state.formData,
            name: "",
            ducksFedPlace: "",
            personId: "",
            ducksCount: "",
            ducksFood: [],
            ducksFoodQuantity: "",
            date: "",
            repeatDays: 0
          },
          formClass: "",
          message: true,
          uniqueTime: data.date,
          storeData: [...this.state.storeData, data]
        },
        () => this.hideMessage(data.repeatDays)
      );
    }
  };
  hideMessage = repeatDays => {
    const { actions } = this.props;
    const { checked } = this.state.formData;
    setTimeout(() => {
      actions.hideMessages();
    }, 2000);
    var day = moment(new Date()).add(repeatDays, "days");
    this.initializeClock(repeatDays, day);
    if (checked) {
      this.repeatSchedule(repeatDays);
    }
  };

  renderSucessMessage = () => {
    return (
      <div className="toast-body toaster-sucess-message">
        Record created sucessfully
      </div>
    );
  };

  renderErrorMessage = () => {
    const { errorMessage } = this.props;
    return (
      <div className="toast-body toaster-failure-message">{errorMessage}</div>
    );
  };

  repeatSchedule = repeatDays => {
    var day = new Date(Date.parse(new Date()) + 1 * 1 * 5 * 60 * 1000);
    this.initializeClock(repeatDays, day, null, "timeFor5Min");
  };

  getTimeRemaining = endTime => {
    var t = Date.parse(endTime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  };

  initializeClock = (repeatDays, endTime, storedUniqueTime, timeLength) => {
    const { actions } = this.props;
    const { storeData, uniqueTime } = this.state;
    const updateClock = () => {
      if (timeLength) {
        localStorage.setItem(
          "timeFor5Min",
          JSON.stringify({
            id: uniqueTime ? uniqueTime : storedUniqueTime,
            time: endTime
          })
        );
      }
      localStorage.setItem(
        "time",
        JSON.stringify({
          id: uniqueTime ? uniqueTime : storedUniqueTime,
          time: endTime
        })
      );
      var t = this.getTimeRemaining(endTime);
      if (t.total <= 0) {
        const repeatData = storeData.filter(data => {
          return data.date === uniqueTime;
        });
        if (repeatData && repeatData.length) {
          const data = {
            name: repeatData[0].name,
            personId: repeatData[0].personId,
            ducksFedPlace: repeatData[0].ducksFedPlace,
            ducksCount: repeatData[0].ducksCount,
            ducksFood: repeatData[0].ducksFood,
            ducksFoodQuantity: repeatData[0].ducksFoodQuantity,
            date: moment(repeatData[0].date).unix()
          };
          actions.postDucksFedForm(data);
        }
        clearInterval(timeinterval);
      }
    };
    if (repeatDays !== 0) {
      updateClock();
      var timeinterval = setInterval(updateClock, 1000);
    }
  };

  componentDidMount() {
    const restoreData = JSON.parse(localStorage.getItem("userInteractionData"));
    const restoreTime = JSON.parse(localStorage.getItem("time"));
    const restoreTimeFor5Min = JSON.parse(localStorage.getItem("timeFor5Min"));
    if (restoreData && restoreData.length) {
      restoreData.forEach(data => {
        if (restoreTimeFor5Min) {
          if (restoreTimeFor5Min.id === data.uniqueTime) {
            this.initializeClock(
              data.repeatDays,
              restoreTimeFor5Min.time,
              data.uniqueTime
            );
          }
        }
        if (restoreTime.id === data.uniqueTime) {
          this.initializeClock(
            data.repeatDays,
            restoreTime.time,
            data.uniqueTime
          );
        }
      });
    }
  }

  render() {
    const { errorMessage, sucessMessage } = this.props;

    return (
      <div className="container">
        <h3 className="header-message">Ducks feeding information form</h3>
        <Form
          {...this.state}
          handleChange={this.handleChange}
          handleDate={this.handleDate}
          handleSelectedDays={this.handleSelectedDays}
          handleFormData={this.handleFormData}
        />
        {errorMessage ? this.renderErrorMessage() : null}
        {sucessMessage ? this.renderSucessMessage() : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sucessMessage: state.ducksFedReducer.sucessMessage,
    errorMessage: state.ducksFedReducer.errorMessage
  };
};

const mapDispatchToProps = dispatch => ({
  actions: {
    postDucksFedForm: data => dispatch(postDucksFedAction(data)),
    hideMessages: () => dispatch(hideMessages())
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
