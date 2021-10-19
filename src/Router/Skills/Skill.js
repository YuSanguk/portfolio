import React from "react";
import styled from "styled-components";

import Web from "./Web_";
import Edit from "./Edit";
import Graphic from "./Graphic";
import Game from "./Game";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: #2f3640;
  border-radius: 12px;

  justify-content: center;
  align-items: center;
  padding: 1em 0.2em 1em 0.2em;
  margin: 0;

  @media only screen and (min-width: 800px) {
    width: 60%;
  }
  @media only screen and (max-width: 799px) {
    width: 95%;
  }
`;

const ItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3em;
  align-items: center;
`;

const ItemImg = styled.img`
  height: 90px;
  width: 90px;
  border-radius: 16px;
  color: white;
  margin-bottom: 1em;
`;

const ItemTitle = styled.h3`
  margin: 0;
  margin-bottom: 0.4em;
`;

const ItemText = styled.p`
  margin: 0;
`;

const Title = styled.h2`
  margin: 0;
  margin-top: 1em;
  margin-bottom: 0.1em;
  font-size: 2rem;
`;

const SubTitle = styled.h6`
  font-size: 1.5rem;
  margin: 0;
  margin-top: 0.95em;
  margin-bottom: 0.5em;
`;

const TitleEx = styled.p`
  margin: 0;
  margin-bottom: 0.8em;
`;

const Skill = ({ Container }) => {
  return (
    <Container>
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
      <SubTitle>Game</SubTitle>
      <Game
        StyledDiv={StyledDiv}
        ItemDiv={ItemDiv}
        ItemImg={ItemImg}
        ItemTitle={ItemTitle}
        ItemText={ItemText}
      />
      <SubTitle>Video</SubTitle>
      <Edit
        StyledDiv={StyledDiv}
        ItemDiv={ItemDiv}
        ItemImg={ItemImg}
        ItemTitle={ItemTitle}
        ItemText={ItemText}
      />
      <SubTitle>Graphic & Design</SubTitle>
      <Graphic
        StyledDiv={StyledDiv}
        ItemDiv={ItemDiv}
        ItemImg={ItemImg}
        ItemTitle={ItemTitle}
        ItemText={ItemText}
      />
    </Container>
  );
};

export default Skill;
