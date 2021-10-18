import React from "react";
import styled from "styled-components";

import Web from "./Web_";
import Edit from "./Edit";
import Graphic from "./Graphic";
import Game from "./Game";
const StyledDiv = styled.div`
  background-color: red;
`;
const ItemDiv = styled.div`
  background: #2f3640;
`;

const ItemImg = styled.img`
  height: 90px;
  width: 90px;
  border-radius: 16px;
`;
const ItemTitle = styled.h3``;
const ItemText = styled.p``;

const Line = styled.hr`
  height: 1px;
  width: 80%;
  background: #000;
  border: 0px solid rgba(0, 0, 0, 0);
`;

const Title = styled.h2`
  font-size: 2rem;
`;

const SubTitle = styled.h6`
  font-size: 1.5rem;
  margin: 0;
  margin-bottom: 15px;
`;

const Skill = () => {
  return (
    <div>
      <Title>Skills</Title>
      <SubTitle>Web</SubTitle>
      <Web ItemImg={ItemImg} />
      <Line />
      <SubTitle>Game</SubTitle>
      <Game />
      <Line />
      <SubTitle>Video</SubTitle>
      <Edit />
      <Line />
      <SubTitle>Graphic & Design</SubTitle>
      <Graphic />
    </div>
  );
};

export default Skill;
