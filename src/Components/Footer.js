import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  margin-top: 1em;
  padding-top: 1.1em;
  padding-bottom: 1.1em;
`;

const StyledP = styled.p`
  margin: 0;
  margin-bottom: 0.3rem;
  padding: 0;
`;

const Line = styled.hr`
  width: 80%;
  border: none;
  height: 0.5px;
  background: white;
  margin: 0;
  margin-top: 0.7em;
  margin-bottom: 2em;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Line />
      <StyledP>Created: Dev-Who</StyledP>
      <StyledP>Designed: Dev-Who</StyledP>
    </StyledFooter>
  );
};

export default Footer;
