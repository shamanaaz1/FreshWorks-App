import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Where the ducks are fed</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Where the ducks are fed..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">
              How many ducks are fed
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="How many ducks are fed..."
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Home;
