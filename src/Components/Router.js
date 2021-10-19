import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import Landing from "../Router/Landing/Landing";
import Award from "../Router/Awards/Awards";
import Contact from "../Router/Contact/Contact";
import Skill from "../Router/Skills/Skill";
import {
  TransitionGroup,
  CSSTransition,
  Transition,
} from "react-transition-group";
import "../style/transition.css";

const AppRouter = () => {
  const location = useLocation();

  return (
    <TransitionGroup className="transition-group">
      <CSSTransition key={location.pathname} classNames="fade" timeout={800}>
        <Switch location={location}>
          <Route exact path="/">
            <Landing />
          </Route>
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
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AppRouter;
