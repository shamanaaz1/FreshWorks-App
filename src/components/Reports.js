import React from "react";
import { connect } from "react-redux";
import moment from "moment";

import { getDucksFedReportsAction } from "../actions/ducksFedActions";

class Reports extends React.Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.getDucksReports();
  }

  renderRecords = () => {
    const { ducksFedReports } = this.props;
    return ducksFedReports.map(record => {
      return (
        <tr key={record.id}>
          <th scope="row">{record.personId}</th>
          <td>{record.name}</td>
          <td>{record.ducksCount}</td>
          <td>
            {record.ducksFood.map(food => {
              return <span key={food}>{food},</span>;
            })}
          </td>
          <td>{record.ducksFoodQuantity}</td>
          <td>{record.ducksFedPlace}</td>
          <td>{moment(record.date).format("MM-DD-YYYY LT")}</td>
        </tr>
      );
    });
  };

  render() {
    const { ducksFedReports } = this.props;
    return (
      <div className="container">
        <h3 className="header-message">Duck feeding information Report</h3>
        {ducksFedReports ? (
          ducksFedReports.length ? (
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Person Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Ducks count</th>
                  <th scope="col">Ducks Food</th>
                  <th scope="col">Ducks Food Quantity</th>
                  <th scope="col">Place</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>{this.renderRecords()}</tbody>
            </table>
          ) : (
            <p className="no-records-message">No records found</p>
          )
        ) : (
          <div className="spinner-border text-dark text-center spinner"></div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ducksFedReports: state.ducksFedReducer.ducksFedRecords
  };
};

const mapDispatchToProps = dispatch => ({
  actions: {
    getDucksReports: () => dispatch(getDucksFedReportsAction())
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reports);
