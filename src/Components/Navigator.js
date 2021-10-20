import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../style/nav-style.css";

const Nav = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: columns;
  align-item: center;
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
  transition: 0.4s;

  &:hover {
    background: #5fe386;
    transition: 0.4s;
  }
`;

const Navigator = () => {
  const [select, SetSelect] = useState(0);
  return (
    <Nav>
      <Li>
        <Link
          to="/"
          onClick={() => SetSelect(0)}
          className={select === 0 ? "selected" : null}
        >
          HOME
        </Link>
      </Li>
      <Li>
        <Link
          to="/skill"
          onClick={() => SetSelect(4)}
          className={select === 4 ? "selected" : null}
        >
          SKILL
        </Link>
      </Li>
      <Li>
        <Link
          to="/portfolio"
          onClick={() => SetSelect(3)}
          className={select === 3 ? "selected" : null}
        >
          PORTFOLIO
        </Link>
      </Li>
      <Li>
        <Link
          to="/awards"
          onClick={() => SetSelect(1)}
          className={select === 1 ? "selected" : null}
        >
          AWARD
        </Link>
      </Li>
      <Li>
        <Link
          to="/contacts"
          onClick={() => SetSelect(2)}
          className={select === 2 ? "selected" : null}
        >
          CONTACT
        </Link>
      </Li>
    </Nav>
  );
};

export default Navigator;
