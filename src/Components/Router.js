import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";

import Landing from "../Router/Landing/Landing";
import Award from "../Router/Awards/Awards";
import Contact from "../Router/Contact/Contact";
import Skill from "../Router/Skills/Skill";
import "../style/transition.css";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AppRouter = () => {
  return (
    <Switch>
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
        <Skill Container={Container} />
      </Route>
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default AppRouter;
