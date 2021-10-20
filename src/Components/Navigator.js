import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import DelayLink from "react-delay-link";
import styled from "styled-components";
import "../style/nav-style.css";
import Transform from "./Transform";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

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
  transition: 0.2s ease-in;
  cursor: pointer;
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
    disableBodyScroll(document.querySelector(".tran"));
    setTimeout(() => {
      setOn(false);
      clearAllBodyScrollLocks();
    }, 5000);
  };

  return (
    <>
      {on && <Transform className="tran" />}
      <Nav>
        <Li
          onClick={() => SetSelect(0)}
          className={select === 0 ? "selected" : null}
        >
          <DelayLink delay={3900} to="/" clickAction={action} replace={false}>
            HOME
          </DelayLink>
        </Li>
        <Li
          onClick={() => SetSelect(4)}
          className={select === 4 ? "selected" : null}
        >
          <DelayLink
            delay={3900}
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
            delay={3900}
            to="/portfolio"
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
            delay={3900}
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
            delay={3900}
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
