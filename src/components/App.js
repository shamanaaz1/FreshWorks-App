import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Reports from "./Reports";
import "../App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/reports" component={Reports} />
      </Switch>
    </Router>
  );
}

export default App;
