import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  background: #999;
  margin: 0;
  padding: 0;
  margin-top: 5em;
  padding-top: 2.4em;
  padding-bottom: 2.4em;
`;

const StyledP = styled.p`
  margin: 0;
  margin-left: 2em;
  padding: 0;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledP>a</StyledP>
      <StyledP>a</StyledP>
    </StyledFooter>
  );
};

export default Footer;
