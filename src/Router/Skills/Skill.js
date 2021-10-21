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
  margin-top: 1em;
  margin-bottom: 1.3em;
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
  padding: 0;
  margin-bottom: 0.8em;
  @media only screen and (min-width: 800px) {
    width: 65%;
    font-size: 1.2rem;
    line-height: calc(1.2rem + 4px);
  }
  @media only screen and (max-width: 799px) {
    width: 85%;
    font-size: 3.6vw;
    line-height: calc(3.6vw + 4px);
  }
  font-weight: 400;
  padding-top: 10px;
  text-align: center;
  letter-spacing: 0.7px;
  color: white;
`;

const Skill = ({ Container, TitleEx, SubTitle, Title }) => {
  return (
    <Container>
      <Title>Skills</Title>
      <TitleEx>
        These are skills that I have to learn to shape my own thoughts. Not all
        technologies can be used professionally, but they can be used without
        much difficulty in proceeding with the project.
      </TitleEx>
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
