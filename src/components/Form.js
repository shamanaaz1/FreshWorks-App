import React from "react";
import DateTimePicker from "react-datetime-picker";

class Form extends React.Component {
  render() {
    const {
      name,
      date,
      ducksCount,
      ducksFedPlace,
      ducksFoodQuantity,
      ducksFood,
      personId,
      repeatDays,
      checked
    } = this.props.formData;
    const {
      formClass,
      handleChange,
      handleDate,
      handleSelectedDays,
      handleFormData
    } = this.props;
    return (
      <form
        className={`form ${formClass}`}
        noValidate
        onSubmit={handleFormData}
      >
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputName">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="inputName"
              autoComplete="off"
              placeholder="Please enter your Name..."
              value={name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputId">Id</label>
            <input
              type="text"
              name="id"
              className="form-control"
              id="inputId"
              autoComplete="off"
              placeholder="Please enter your unique Id..."
              value={personId}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="ducksFedPlace">Where the ducks are fed</label>
          <input
            type="text"
            name="ducksFedPlace"
            className="form-control"
            id="ducksFedPlace"
            autoComplete="off"
            placeholder="Ex.. Ron Watson Park, Toronto"
            value={ducksFedPlace}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ducksCount">How many ducks are fed</label>
          <input
            type="number"
            name="ducksCount"
            className="form-control"
            id="ducksCount"
            autoComplete="off"
            placeholder="Ex.. 12"
            value={ducksCount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ducksFedTime">
            What time the ducks are fed
            <span style={{ color: "red" }}>
              (Please select the time equal or less than the current time)
            </span>
          </label>
          <div className="input-group date" id="ducksFedTime">
            <DateTimePicker
              onChange={handleDate}
              value={date}
              required
              maxDate={new Date()}
              hourPlaceholder="hr"
              minutePlaceholder="min"
              dayPlaceholder="DD"
              monthPlaceholder="MM"
              yearPlaceholder="YYYY"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="ducksFood">What food the ducks are fed</label>
          <input
            type="text"
            name="ducksFood"
            className="form-control"
            id="ducksFood"
            autoComplete="off"
            placeholder="Ex.. nuts, beans"
            value={ducksFood}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="ducksFoodQuantity">
            How much food the ducks are fed( in grams or kilograms )
          </label>
          <input
            type="text"
            name="ducksFoodQuantity"
            className="form-control"
            id="ducksFoodQuantity"
            autoComplete="off"
            placeholder="Ex.. 300gr or 2kg"
            value={ducksFoodQuantity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputState">Repeat the same for next one day</label>
          <select
            id="inputState"
            className="form-control"
            value={repeatDays}
            onChange={handleSelectedDays}
          >
            <option value="0">Choose...</option>
            <option value="1">1</option>
          </select>
        </div>
        <div className="form-group custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            name="custom-checkbox"
            id="customCheck1"
            checked={checked}
            onChange={handleChange}
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Check this custom checkbox if you want to test repeating schedule
            for next 5 min
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
