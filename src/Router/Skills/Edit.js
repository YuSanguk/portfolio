import React from "react";

import ae from "./Img/Edit/Ae.png";
import pp from "./Img/Edit/프프.png";

const Edit = ({ StyledDiv, ItemDiv, ItemImg, ItemTitle, ItemText }) => {
  return (
    <StyledDiv>
      <ItemDiv>
        <ItemImg src={ae} alt="ae" />
        <ItemTitle>Adobe After Effect</ItemTitle>
        <ItemText>after effect is</ItemText>
      </ItemDiv>
      <ItemDiv>
        <ItemImg src={pp} alt="pp" />
        <ItemTitle>Adobe Premiere Pro</ItemTitle>
        <ItemText>Premiere Pro is</ItemText>
      </ItemDiv>
    </StyledDiv>
  );
};

export default Edit;
