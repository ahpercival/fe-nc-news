import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from '@reach/router'

const DisplaySingleArticle = props => {
    const { article } = props
    return (
        <Container>
            <h1><Link to={`/articles?topic=${article.topic}`}>{article.topic}</Link></h1>
            <h2>{article.title}</h2>
            <h4>by <Link to={`/users/${article.author}`}>{`${article.author}`} </Link>
                posted at {article.created_at}</h4>
            <p>{article.body}</p>
        </Container>
    )
}

export default DisplaySingleArticle
