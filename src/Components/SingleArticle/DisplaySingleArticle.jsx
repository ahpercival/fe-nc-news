import React from 'react';
import { Container } from 'react-bootstrap';

const DisplaySingleArticle = props => {
    const { article } = props
    return (
        <Container>
            <h1>{article.title}</h1>
            <h3>{article.topic}</h3>
            <h4>by {article.author} posted at {article.created_at}</h4>
            <p>{article.body}</p>
        </Container>
   )
}

export default DisplaySingleArticle