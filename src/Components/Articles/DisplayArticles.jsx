import React from "react";
import {Container, Media, Form} from "react-bootstrap";
import {Link} from "@reach/router";
import PageTitle from "../Title/PageTitle";

const DisplayArticles = props => {
  const {articles, sortArticlesBy, filterOptions, userLoggedIn} = props;

  return (
    <Container>
      {props.topic ? (
        <PageTitle>{props.topic}</PageTitle>
      ) : (
        <PageTitle>Articles</PageTitle>
      )}
      <Form onChange={sortArticlesBy}>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Sort by:</Form.Label>
          <Form.Control as="select">
            {filterOptions.map(filter => {
              return <option>{filter}</option>;
            })}
          </Form.Control>
        </Form.Group>
      </Form>
      {!articles.length ? (
        <div>
          <h3>Hmm....it seems there are no articles on '{props.topic}'.</h3>
          {userLoggedIn ? (
            <h3>You can post one by filling out the form below!</h3>
          ) : (
            <h5>
              To post something about '{props.topic}' log in as a guest in top
              right corner of the page or join our community
              <Link to="/users"> here</Link>.
            </h5>
          )}
        </div>
      ) : (
        articles.map(article => {
          return (
            <ul key={`dispArt${article.article_id}`} className="list-unstyled">
              <Media as="li">
                <Media.Body>
                  <h5>
                    {" "}
                    <Link to={`/articles/${article.article_id}`}>
                      {article.title}{" "}
                    </Link>
                    by{" "}
                    <Link to={`/users/${article.author}`}>{`${
                      article.author
                    }`}</Link>
                  </h5>
                </Media.Body>
              </Media>
            </ul>
          );
        })
      )}
    </Container>
  );
};

export default DisplayArticles;
