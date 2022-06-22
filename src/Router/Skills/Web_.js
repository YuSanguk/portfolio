import React from "react";
import js from "./Img/web/js.png";
import re from "./Img/web/react.png";
import ts from "./Img/web/Ts.png";
import redux from "./Img/web/redux.png";
import sc from "./Img/web/sc.png";

const Web = ({ StyledDiv, ItemDiv, ItemImg, ItemTitle, ItemText }) => {
  return (
    <StyledDiv>
      <ItemDiv>
        <ItemImg src={js} alt="js" />
        <ItemTitle>JavaScript</ItemTitle>
        <ItemText>
          JavaScript is a programming language that adds interactivity to your
          website. JavaScript itself is relatively compact, yet very flexible.
        </ItemText>
      </ItemDiv>
      <ItemDiv>
        <ItemImg src={re} alt="react" />
        <ItemTitle>REACT</ItemTitle>
        <ItemText>
          React is front-end Framework for building user interfaces or UI
          components.
        </ItemText>
      </ItemDiv>
      <ItemDiv>
        <ItemImg src={ts} alt="typeScript" />
        <ItemTitle>TypeScript</ItemTitle>
        <ItemText>
          TypeScript is a strict syntactical superset of JavaScript and adds
          optional static typing to the language.
        </ItemText>
      </ItemDiv>
      <ItemDiv>
        <ItemImg src={sc} alt="StyledCompo" />
        <ItemTitle>Styled components is</ItemTitle>
        <ItemText>
          Styled components is used by teams all around the world to create
          beautiful websites.
        </ItemText>
      </ItemDiv>
      <ItemDiv>
        <ItemImg src={redux} alt="Redux" />
        <ItemTitle>Redux</ItemTitle>
        <ItemText>
          Redux is a small library with a simple, limited API designed to be a
          predictable container for application state.
        </ItemText>
      </ItemDiv>
    </StyledDiv>
  );
};

export default Web;
