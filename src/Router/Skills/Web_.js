import React from "react";
import js from "./Img/web/js.png";
import nj from "./Img/web/Node.png";
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
        <ItemText>JS is </ItemText>
      </ItemDiv>
      <StyledDiv>
        <ItemDiv>
          <ItemImg src={nj} alt="js" />
          <ItemTitle>Node JS</ItemTitle>
          <ItemText>Node JS is</ItemText>
        </ItemDiv>
      </StyledDiv>
      <ItemDiv>
        <ItemImg src={re} alt="react" />
        <ItemTitle>REACT</ItemTitle>
        <ItemText>React is</ItemText>
      </ItemDiv>
      <ItemDiv>
        <ItemImg src={ts} alt="typeScript" />
        <ItemTitle>TypeScript</ItemTitle>
        <ItemText>TypeScrit is</ItemText>
      </ItemDiv>
      <ItemDiv>
        <ItemImg src={sc} alt="StyledCompo" />
        <ItemTitle>StyledCompsed is</ItemTitle>
        <ItemText>Style COmpo is</ItemText>
      </ItemDiv>
      <ItemDiv>
        <ItemImg src={redux} alt="Redux" />
        <ItemTitle>Redux</ItemTitle>
        <ItemText>Redux is</ItemText>
      </ItemDiv>
    </StyledDiv>
  );
};

export default Web;
