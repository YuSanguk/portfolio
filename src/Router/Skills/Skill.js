import React from "react";
import styled from "styled-components";

import Web from "./Web_";
import Edit from "./Edit";
import Graphic from "./Graphic";
import Game from "./Game";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemDiv = styled.div`
  background: #2f3640;
`;

const ItemImg = styled.img`
  height: 90px;
  width: 90px;
  border-radius: 16px;
  color: white;
`;

const ItemTitle = styled.h3`
  margin: 0;
`;

const ItemText = styled.p`
  margin: 0;
`;

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

const Margin = styled.div`
  margin-left: 40px;
`;

const TitleEx = styled.p``;

const Skill = () => {
  return (
    <Margin>
      <Title>Skills</Title>
      <TitleEx>Lorem</TitleEx>
      <SubTitle>Web</SubTitle>
      <Web
        StyledDiv={StyledDiv}
        ItemDiv={ItemDiv}
        ItemImg={ItemImg}
        ItemTitle={ItemTitle}
        ItemText={ItemText}
      />
      <Line />
      <SubTitle>Game</SubTitle>
      <Game
        StyledDiv={StyledDiv}
        ItemDiv={ItemDiv}
        ItemImg={ItemImg}
        ItemTitle={ItemTitle}
        ItemText={ItemText}
      />
      <Line />
      <SubTitle>Video</SubTitle>
      <Edit
        StyledDiv={StyledDiv}
        ItemDiv={ItemDiv}
        ItemImg={ItemImg}
        ItemTitle={ItemTitle}
        ItemText={ItemText}
      />
      <Line />
      <SubTitle>Graphic & Design</SubTitle>
      <Graphic
        StyledDiv={StyledDiv}
        ItemDiv={ItemDiv}
        ItemImg={ItemImg}
        ItemTitle={ItemTitle}
        ItemText={ItemText}
      />
    </Margin>
  );
};

export default Skill;
