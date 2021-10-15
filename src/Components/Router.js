import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Navigator from "./Navigator";
import Award from "../Router/Awards/Awards";
import Contact from "../Router/Contact/Contact";
import Skill from "../Router/Skills/Skill";

const AppRouter = () => {
  return (
    <Router>
      <Navigator />
      <Switch>
        <Route exact path="/"></Route>
        <Route exact path="/awards">
          <Award />
        </Route>
        <Route exact path="/contacts">
          <Contact />
        </Route>
        <Route exact path="/portfolio"></Route>
        <Route exact path="/skill">
          <Skill />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
