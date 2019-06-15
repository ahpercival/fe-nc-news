import React from "react";
import {Link} from "@reach/router";
import {Container, Row, Col} from "react-bootstrap";
import PageTitle from "../Title/PageTitle";

const ErrorPage = props => {
  return (
    <Container>
      <Col>
        <Row>
          <PageTitle>Oh no!</PageTitle>
        </Row>
        <Row>
          <h3>You are searching for something that cannot be found</h3>
        </Row>
        <Row>
          <h4>
            Return to the home page <Link to="/home">here</Link>
          </h4>
          <br />
          <br />
        </Row>
      </Col>
    </Container>
  );
};

export default ErrorPage;
