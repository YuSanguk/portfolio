import React from "react";

import un from "./Img/game/unity.svg";
import cs from "./Img/game/cs.png";

const back = {
  background: "white",
};

const Game = ({ StyledDiv, ItemDiv, ItemImg, ItemTitle, ItemText }) => {
  return (
    <StyledDiv>
      <ItemDiv>
        <ItemImg src={un} alt="unity" style={back} />
        <ItemTitle>Unity</ItemTitle>
        <ItemText>
          Unity can be used to create three-dimensional (3D) and two-dimensional
          (2D) games, as well as interactive simulations and other experiences.
        </ItemText>
      </ItemDiv>
      <ItemDiv>
        <ItemImg src={cs} alt="C#" />
        <ItemTitle>C#</ItemTitle>
        <ItemText>
          C# is intended to be a simple, modern, general-purpose,
          object-oriented programming language.
        </ItemText>
      </ItemDiv>
    </StyledDiv>
  );
};

export default Game;
