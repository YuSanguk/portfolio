import React, { useState } from "react";
import styled from "styled-components";
import data from "./webport.json";
import img1 from "./img/ColorGradient.png";

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
  cursor: pointer;
  background: white;
  width: 240px;
  height: 160px;
  box-shoadow: 4px 4px 0px 0px rgba(60, 60, 60, 0.6);
  flex-direction: column;
  justify-content: center;
  gap: 0;
  align-items: center;
  border-radius: 8px;
  display: initial !important;
`;

const ItemImg = styled.img`
  border-radius: 8px;
  width: 240px;
  height: 120px;
  margin: 0;
  padding: 0;
`;

const ItemText = styled.p`
  margin: 0;
  padding: 0;
  transform: TranslateY(-3px);
  width: 240px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-width: 600;
  font-size: 18px;
  color: white;
  background: rgba(0, 0, 30, 0.86);
  border-radius: 4px 4px 8px 8px;
`;

const ModalBox = styled.div`
  position: absolute;
  width: 250px;
  padding: 0;
  padding-bottom: 15px;
  color: white;
  background: rgba(15, 15, 45, 0.8);
  box-shadow: 1.2px 1.2px rgba(0, 0, 0, 0.38);
  z-index: 20;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateX(-7px) translateY(10px);
`;

const Describe = styled.p`
  font-weight: 400;
  margin: 0;
  padding: 0;
  margin-top: 10px;
  margin-bottom: 14px;
  text-align: center;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 1.1rem;
`;

const TagBox = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Tag = styled.span`
  padding: 2px 5px 2px 5px;
  border-radius: 4px;
  background: yellow;
  color: black;
  font-weight: 300;
`;

const GraphicPort = () => {
  const [on, setOn] = useState(null);
  return (
    <>
      <Cen>
        <Item
          onMouseEnter={() => setOn("first")}
          onMouseLeave={() => setOn(null)}
          onClick={() => window.open(data[0].Link)}
        >
          <ItemImg src={img1} alt="Img" />
          <ItemText>{data[0].Project}</ItemText>
          {on === "first" && (
            <ModalBox>
              <Describe>{data[0].Describe}</Describe>
              <TagBox>
                {data[0].Key.map(tag => {
                  return <Tag id="tag">{"# " + tag}</Tag>;
                })}
              </TagBox>
            </ModalBox>
          )}
        </Item>
        <Item
          onMouseEnter={() => setOn("second")}
          onMouseLeave={() => setOn(null)}
          onClick={() => window.open(data[1].Link)}
        >
          <ItemImg src={img1} alt="Img" />
          <ItemText>{data[1].Project}</ItemText>
          {on === "second" && (
            <ModalBox>
              <Describe>{data[1].Describe}</Describe>
              <TagBox>
                {data[1].Key.map(tag => {
                  return <Tag id="tag">{"# " + tag}</Tag>;
                })}
              </TagBox>
            </ModalBox>
          )}
        </Item>
        <Item
          onMouseEnter={() => setOn("third")}
          onMouseLeave={() => setOn(null)}
          onClick={() => window.open(data[2].Link)}
        >
          <ItemImg src={img1} alt="Img" />
          <ItemText>{data[2].Project}</ItemText>
          {on === "third" && (
            <ModalBox>
              <Describe>{data[2].Describe}</Describe>
              <TagBox>
                {data[2].Key.map(tag => {
                  return <Tag id="tag">{"# " + tag}</Tag>;
                })}
              </TagBox>
            </ModalBox>
          )}
        </Item>
        <Item
          onMouseEnter={() => setOn("forth")}
          onMouseLeave={() => setOn(null)}
          onClick={() => window.open(data[3].Link)}
        >
          <ItemImg src={img1} alt="Img" />
          <ItemText>{data[3].Project}</ItemText>
          {on === "forth" && (
            <ModalBox>
              <Describe>{data[3].Describe}</Describe>
              <TagBox>
                {data[3].Key.map(tag => {
                  return <Tag id="tag">{"# " + tag}</Tag>;
                })}
              </TagBox>
            </ModalBox>
          )}
        </Item>
        <Item
          onMouseEnter={() => setOn("five")}
          onMouseLeave={() => setOn(null)}
          onClick={() => alert("this website is my portfolio!!")}
        >
          <ItemImg src={img1} alt="Img" />
          <ItemText>{data[4].Project}</ItemText>
          {on === "five" && (
            <ModalBox>
              <Describe>{data[4].Describe}</Describe>
              <TagBox>
                {data[4].Key.map(tag => {
                  return <Tag id="tag">{"# " + tag}</Tag>;
                })}
              </TagBox>
            </ModalBox>
          )}
        </Item>
      </Cen>
    </>
  );
};

export default GraphicPort;
