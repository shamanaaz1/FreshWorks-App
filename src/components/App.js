import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import "../App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
