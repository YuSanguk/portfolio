import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Blinking = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: .8;
  }
  100% {
    opacity: 0;
  }
`;

const TextCon = styled.div`
  margin-top: 9em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 9em;
`;

const Guide = styled.p`
  color: lightgrey;
  animation: ${Blinking} 3s infinite;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const TextLine = styled.div`
  display: flex;
`;

const Space = styled.span`
  width: 1rem;
`;

function Componenet(value) {
  const [hover, setHover] = useState(false);
  const toggleHover = () => {
    if (hover === false) {
      setHover(true);
      setTimeout(() => {
        setHover(false);
      }, 2000);
    }
  };
  return (
    <span
      className={hover ? "hovering base" : "base"}
      onMouseEnter={toggleHover}
    >
      {value}
    </span>
  );
}

const Text = () => {
  return (
    <>
      <TextCon>
        <TextLine>
          {Componenet("H")}
          {Componenet("I")}
          {Componenet(",")}
          <Space />
          {Componenet("e")}
          {Componenet("v")}
          {Componenet("e")}
          {Componenet("r")}
          {Componenet("y")}
          {Componenet("o")}
          {Componenet("n")}
          {Componenet("e")}
        </TextLine>
        <TextLine>
          {Componenet("I")}
          {Componenet("'")}
          {Componenet("m")}
          <Space />
          {Componenet("D")}
          {Componenet("E")}
          {Componenet("V")}
          {Componenet("-")}
          {Componenet("W")}
          {Componenet("H")}
          {Componenet("O")}
        </TextLine>
        <TextLine>
          {Componenet("w")}
          {Componenet("e")}
          {Componenet("b")}
          <Space />
          {Componenet("d")}
          {Componenet("e")}
          {Componenet("v")}
          {Componenet("e")}
          {Componenet("l")}
          {Componenet("o")}
          {Componenet("p")}
          {Componenet("e")}
          {Componenet("r")}
        </TextLine>

        <Guide>↑ On Mouse Here ↑</Guide>
      </TextCon>
    </>
  );
};

export default Text;
