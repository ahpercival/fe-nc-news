import React from "react";
import {Link} from "@reach/router";
import {Container} from "react-bootstrap";
import PageTitle from "../Title/PageTitle";

const ErrorPage = props => {
  return (
    <Container>
      <PageTitle>Oh no!</PageTitle>
      <h3>Unfortunately that page cannot be found</h3>
      <Link to="/home">Return to Home Page</Link>
    </Container>
  );
};

export default ErrorPage;
