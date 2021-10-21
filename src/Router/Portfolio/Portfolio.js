import React, { useState } from "react";
import styled from "styled-components";
import WebPort from "./webport/Webport";
import GamePort from "./gameport/Gameport";
import EditPort from "./editport/EditPort";
import GraphicPort from "./graphic/GraphicPort";

import "../../style/port.css";

const StyledSelect = styled.select`
  border: none;
  height: 2.4rem;
  width: 152px;
  padding-left: 3px !important;
  margin: 0;
  padding: 0;
  background: none;
  color: white;
  font-family: "pretendard";
  font-size: 2rem;
  font-weight: 700;
`;

const Option = styled.option`
  color: black;
  font-size: 1.2rem;
  border: none;
`;

const Portfolio = ({ Container, Title }) => {
  const [mode, setMode] = useState("Web");
  return (
    <Container>
      <Title>
        Portfolio About{" "}
        <StyledSelect value={mode} onChange={e => setMode(e.target.value)}>
          <Option>Web</Option>
          <Option>Game</Option>
          <Option>Edit</Option>
          <Option>Graphic</Option>
        </StyledSelect>
      </Title>
      {mode === "Web" && <WebPort />}
      {mode === "Game" && <GamePort />}
      {mode === "Edit" && <EditPort />}
      {mode === "Graphic" && <GraphicPort />}
    </Container>
  );
};

export default Portfolio;
