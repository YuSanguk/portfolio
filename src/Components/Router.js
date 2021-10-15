import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Navigator from "./Navigator";
import Award from "../Router/Awards/Awards";

const AppRouter = () => {
  return (
    <Router>
      <Navigator />
      <Switch>
        <Route exact path="/"></Route>
        <Route exact path="/awards">
          <Award />
        </Route>
        <Route exact path="/contacts"></Route>
        <Route exact path="/portfolio"></Route>
        <Route exact path="/skill"></Route>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
