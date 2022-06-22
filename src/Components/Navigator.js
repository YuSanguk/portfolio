import React, { useState } from "react";
import DelayLink from "react-delay-link";
import styled from "styled-components";
import "../style/nav-style.css";
import Transform from "./Transform";
var Scroll = require("react-scroll");

const Nav = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: columns;
  align-items: center;
  justify-content: center;
  padding-top: 12px;
  padding-bottom: 10px;
  font-weight: 400;
  scroll-snap-stop: always;
  @media only screen and (min-width: 800px) {
    font-size: 2.1rem;
    column-gap: 2rem;
  }
  @media only screen and (max-width: 799px) {
    font-size: 4vw;
    column-gap: 2.8vw;
  }
`;

const Li = styled.li`
  color: white;
  text-decoration: none;
  font-weight: 400;
  transition: 0.2s ease-in;
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
  &:hover {
    color: #08fdd8;
    transition: 0.2s ease-in;
  }
`;

const Navigator = () => {
  const [select, SetSelect] = useState(0);
  const [on, setOn] = useState(false);

  const action = () => {
    setOn(true);
    setTimeout(() => {
      Scroll.animateScroll.scrollToTop();
    }, 3200);
    setTimeout(() => {
      setOn(false);
    }, 4000);
  };

  return (
    <>
      {on && <Transform />}
      <Nav>
        <Li
          onClick={() => SetSelect(0)}
          className={select === 0 ? "selected" : null}
        >
          <DelayLink delay={2000} to="/" clickAction={action} replace={false}>
            HOME
          </DelayLink>
        </Li>
        <Li
          onClick={() => SetSelect(4)}
          className={select === 4 ? "selected" : null}
        >
          <DelayLink
            delay={2000}
            to="/skill"
            clickAction={action}
            replace={false}
          >
            SKILL
          </DelayLink>
        </Li>
        <Li
          onClick={() => SetSelect(3)}
          className={select === 3 ? "selected" : null}
        >
          <DelayLink
            delay={2000}
            to="/portf"
            clickAction={action}
            replace={false}
          >
            PORTFOLIO
          </DelayLink>
        </Li>
        <Li
          onClick={() => SetSelect(1)}
          className={select === 1 ? "selected" : null}
        >
          <DelayLink
            delay={2000}
            to="/awards"
            clickAction={action}
            replace={false}
          >
            AWARD
          </DelayLink>
        </Li>
        <Li
          onClick={() => SetSelect(2)}
          className={select === 2 ? "selected" : null}
        >
          <DelayLink
            delay={2000}
            to="/contacts"
            clickAction={action}
            replace={false}
          >
            CONTACT
          </DelayLink>
        </Li>
      </Nav>
    </>
  );
};

export default Navigator;
