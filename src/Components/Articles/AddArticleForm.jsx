import React from "react";
import {Container, Form, Button} from "react-bootstrap";
import {navigate, Link} from "@reach/router";
import PageTitle from "../Title/PageTitle";

const AddArticleForm = props => {
  const activeButton = !!props.title && !!props.body && !!props.topic;
  return (
    <Container>
      <PageTitle>Post a new article</PageTitle>
      <Form onSubmit={props.addNewArticle}>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Topic</Form.Label>
          <Form.Text>
            Select form the list below or add a{" "}
            <Link to="/topic">new topic here</Link>
          </Form.Text>
          <Form.Control
            onChange={event => {
              props.updateUserInput("topic", event);
            }}
            as="select"
          >
            <option>Please select topic</option>
            {props.topicSelection.map(topic => {
              return <option key={`topSel${topic.slug}`}>{topic.slug}</option>;
            })}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            onChange={event => {
              props.updateUserInput("title", event);
            }}
            type="text"
            placeholder="Name of your article"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Body</Form.Label>
          <Form.Control
            onChange={event => {
              props.updateUserInput("body", event);
            }}
            as="textarea"
            rows="3"
          />
        </Form.Group>
        <Button type="submit" disabled={!activeButton}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddArticleForm;
