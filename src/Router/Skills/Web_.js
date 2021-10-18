import React from "react";
import js from "./Img/web/js.png";
import nj from "./Img/web/Node.png";
import re from "./Img/web/react.png";
import ts from "./Img/web/Ts.png";
import redux from "./Img/web/redux.png";
import sc from "./Img/web/sc.png";

const Web = ({ ItemImg }) => {
  return (
    <div>
      <div>
        JavaScript
        <ItemImg src={js} alt="js" />
      </div>
      <div>
        NodeJs
        <ItemImg src={nj} alt="js" />
      </div>
      <div>
        React
        <ItemImg src={re} alt="react" />
      </div>
      <div>
        TypeScript
        <ItemImg src={ts} alt="typeScript" />
      </div>
      <div>
        Redux
        <ItemImg src={redux} alt="Redux" />
      </div>
      <div>
        StyledComponent
        <ItemImg src={sc} alt="StyledCompo" />
      </div>
    </div>
  );
};

export default Web;
