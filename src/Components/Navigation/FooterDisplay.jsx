import React from "react";
import {Container, Image} from "react-bootstrap";
import Footer from "../../assets/img/Footer.jpg";

const FooterDisplay = () => {
  return (
    <Container>
      <Image src={Footer} fluid />
    </Container>
  );
};

export default FooterDisplay;
