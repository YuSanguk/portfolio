import React from "react";

import be from "./Img/Graphic/blender.png";
import fi from "./Img/Graphic/figma.png";
import ind from "./Img/Graphic/indesign.png";
import xd from "./Img/Graphic/xd.png";
import ph from "./Img/Graphic/포토샵.png";

const Graphic = ({ StyledDiv, ItemDiv, ItemImg, ItemTitle, ItemText }) => {
  return (
    <StyledDiv>
      <ItemDiv>
        <ItemImg src={be} alt="be" />
        <ItemTitle>Blender</ItemTitle>
        <ItemText>Blender is</ItemText>
      </ItemDiv>
      <ItemDiv>
        <ItemImg src={fi} alt="fi" />
        <ItemTitle>Figma</ItemTitle>
        <ItemText>Figma is</ItemText>
      </ItemDiv>
      <ItemDiv>
        <ItemImg src={xd} alt="xd" />
        <ItemTitle>Adobe Xd</ItemTitle>
        <ItemText>Xd is</ItemText>
      </ItemDiv>
      <ItemDiv>
        <ItemImg src={ph} alt="ph" />
        <ItemTitle>Adobe Phtoshop</ItemTitle>
        <ItemText>PhotoShop is</ItemText>
      </ItemDiv>
      <ItemDiv>
        <ItemImg src={ind} alt="ind" />
        <ItemTitle>Adobe Indesign</ItemTitle>
        <ItemText>Indesign is</ItemText>
      </ItemDiv>
    </StyledDiv>
  );
};

export default Graphic;
