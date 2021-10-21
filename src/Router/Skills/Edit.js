import React from "react";

import ae from "./Img/Edit/Ae.png";
import pp from "./Img/Edit/프프.png";

const Edit = ({ StyledDiv, ItemDiv, ItemImg, ItemTitle, ItemText }) => {
  return (
    <StyledDiv>
      <ItemDiv>
        <ItemImg src={ae} alt="ae" />
        <ItemTitle>Adobe After Effect</ItemTitle>
        <ItemText>
          Adobe After Effects is a digital visual effects, motion graphics, and
          compositing application and used in the post-production process of
          film making, video games and television production.
        </ItemText>
      </ItemDiv>
      <ItemDiv>
        <ItemImg src={pp} alt="pp" />
        <ItemTitle>Adobe Premiere Pro</ItemTitle>
        <ItemText>
          Premiere Pro is a timeline-based video editing software application.
        </ItemText>
      </ItemDiv>
    </StyledDiv>
  );
};

export default Edit;
