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
        <ItemText>Unity is</ItemText>
      </ItemDiv>
      <ItemDiv>
        <ItemImg src={cs} alt="C#" />
        <ItemTitle>C#</ItemTitle>
        <ItemText>C# is</ItemText>
      </ItemDiv>
    </StyledDiv>
  );
};

export default Game;
