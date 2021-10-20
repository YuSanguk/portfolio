import React, { useState } from "react";
import styled from "styled-components";
import data from "./webport.json";

const Cen = styled.div`
  margin-top: 90px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 60px;
  @media screen and (max-width: 600px) {
    width: 90%;
  }
  @media screen and (min-width: 601px) {
    width: 60%;
  }

  margin-bottom: 120px;
`;

const Item = styled.div`
  background: white;
  width: 240px;
  height: 160px;
  box-shoadow: 4px 4px 0px 0px rgba(60, 60, 60, 0.6);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  display: initial !important;
`;

const ItemImg = styled.img`
  border-radius: 8px;
  width: 240px;
  height: 120px;
`;

const ItemText = styled.p`
  margin: 0;
  padding: 0;
  width: 240px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-width: 600;
  font-size: 18px;
  color: black;
`;

const ModalBack = styled.div`
  margin: 0;
  padding: 0;
  position: fixed;
  width: 100vw;
  height: 130vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 15;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  position: absolute;
  width: 300px;
  height: 200px;
  color: black;
  background: rgba(125, 125, 125, 1);
  z-index: 20;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-75px) translateY(15vh);
`;

const GraphicPort = () => {
  const [on, setOn] = useState(null);
  return (
    <>
      <Cen>
        <Item
          onMouseEnter={() => setOn("first")}
          onMouseLeave={() => setOn(null)}
        >
          <ItemImg src={data[0].img} alt="Img" />
          <ItemText>{data[0].Project}</ItemText>
          {on === "first" && <ModalBox>a</ModalBox>}
        </Item>
        <Item
          onMouseEnter={() => setOn("first")}
          onMouseLeave={() => setOn(null)}
        >
          <ItemImg src={data[0].img} alt="Img" />
          <ItemText>{data[0].Project}</ItemText>
          {on === "fqirst" && <ModalBox>a</ModalBox>}
        </Item>
        <Item
          onMouseEnter={() => setOn("first")}
          onMouseLeave={() => setOn(null)}
        >
          <ItemImg src={data[0].img} alt="Img" />
          <ItemText>{data[0].Project}</ItemText>
          {on === "fiqrst" && <ModalBox>a</ModalBox>}
        </Item>
        <Item
          onMouseEnter={() => setOn("first")}
          onMouseLeave={() => setOn(null)}
        >
          <ItemImg src={data[0].img} alt="Img" />
          <ItemText>{data[0].Project}</ItemText>
          {on === "firqst" && <ModalBox>a</ModalBox>}
        </Item>
      </Cen>
    </>
  );
};

export default GraphicPort;
