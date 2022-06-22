import React from "react";
import styled, { keyframes } from "styled-components";

const BoxDown = keyframes`
    0% {
      opacity: 1;
        transform: translateY(-100vh);
    }
    40% {
        transform: translateY(0);
    }
    80% {
        transform: translateY(0);
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

const BarCharge = keyframes`
    0% {
        width: 0;
    }    

    50% {
        width: 0;
    }
    100% {
        width: 100%;
    }
`;

const Center = styled.div`
  z-index: 9;
  opacity: 0;
  background: #353b41;
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${BoxDown} 4s ease-in-out;
`;

const Text = styled.p`
  font-size: 2rem;
  margin: 0;
  margin-bottom: 1.5rem;
`;

const Bar = styled.div`
  height: 3px;
  width: 200px;
  background: #2f3640;
`;

const ColorBar = styled.div`
  position: relative;
  height: 3px;
  width: 200px;
  background-color: #5fe386;
  animation: ${BarCharge} 3.2s ease-in;
`;

const Transform = () => {
  return (
    <Center>
      <Text>DEV - WHO</Text>
      <Bar>
        <ColorBar></ColorBar>
      </Bar>
    </Center>
  );
};

export default Transform;
