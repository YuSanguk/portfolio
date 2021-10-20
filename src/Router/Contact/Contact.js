import React from "react";
import Icon from "./Link-Icon";
import Email from "./Email";

const Contact = ({ Container, Title, TitleEx, SubTitle }) => {
  return (
    <Container>
      <Icon />
      <Title>Contact With me</Title>
      <Email />
    </Container>
  );
};

export default Contact;
