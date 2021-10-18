import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: columns;
  align-item: center;
  justify-content: center;
  padding-top: 8px;
  padding-bottom: 8px;
  font-weight: 400;
  @media only screen and (min-width: 800px) {
    font-size: 2.2rem;
    column-gap: 2rem;
  }
  @media only screen and (max-width: 799px) {
    font-size: 4vw;
    column-gap: 3.5vw;
  }
`;

const Li = styled.li`
  color: white;
`;

const Navigator = () => {
  return (
    <Nav>
      <Li>
        <Link to="/">HOME</Link>
      </Li>
      <Li>
        <Link to="/awards">AWARD</Link>
      </Li>
      <Li>
        <Link to="/contacts">CONTACT</Link>
      </Li>
      <Li>
        <Link to="/portfolio">PORTFOLIO</Link>
      </Li>
      <Li>
        <Link to="/skill">SKILL</Link>
      </Li>
    </Nav>
  );
};

export default Navigator;
