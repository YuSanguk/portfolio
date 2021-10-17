import React from "react";
import Web from "./Web_";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: red;
`;
const ItemDiv = styled.div``;
const ItemImg = styled.img``;
const ItemTIle = styled.h3``;
const ItemText = styled.p``;

const Line = styled.hr`
  height: 1px;
  width: 80%;
  background: #000;
  border: 0px solid rgba(0, 0, 0, 0);
`;

const Skill = () => {
  return (
    <div>
      <div>Web</div>
      <Web />
      <Line />
      <div>Game</div>
      <Line />
      <div>Edit</div>
      <Line />
      <div>Computer Graphic</div>
    </div>
  );
};

export default Skill;
