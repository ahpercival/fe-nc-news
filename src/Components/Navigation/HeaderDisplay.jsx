import React from "react";
import {Container, Image} from "react-bootstrap";
import Header from "../../assets/img/Header.jpg";

const HeaderDisplay = () => {
  return (
    <Container>
      <Image src={Header} fluid />
    </Container>
  );
};

export default HeaderDisplay;
