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
        <ItemText>
          Blender is a 3D computer graphics software toolset used for creating
          animated films, visual effects, art, 3D printed models, motion
          graphics, interactive 3D applications, virtual reality, and computer
          games.
        </ItemText>
      </ItemDiv>
      <ItemDiv>
        <ItemImg src={fi} alt="fi" />
        <ItemTitle>Figma</ItemTitle>
        <ItemText>
          Figma focuses on use in user interface and user experience design,
          with an emphasis on real-time collaboration.
        </ItemText>
      </ItemDiv>
      <ItemDiv>
        <ItemImg src={xd} alt="xd" />
        <ItemTitle>Adobe Xd</ItemTitle>
        <ItemText>
          XD is a vector-based user experience design tool for web apps and
          mobile apps.
        </ItemText>
      </ItemDiv>
      <ItemDiv>
        <ItemImg src={ph} alt="ph" />
        <ItemTitle>Adobe Phtoshop</ItemTitle>
        <ItemText>Adobe Photoshop is a raster graphics editor.</ItemText>
      </ItemDiv>
      <ItemDiv>
        <ItemImg src={ind} alt="ind" />
        <ItemTitle>Adobe InDesign</ItemTitle>
        <ItemText>
          InDesign is a desktop publishing and page layout designing software
          application. InDesign can be used to create works such as posters,
          flyers, brochures, magazines, newspapers, presentations, books and
          ebooks.
        </ItemText>
      </ItemDiv>
    </StyledDiv>
  );
};

export default Graphic;
