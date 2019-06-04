import React from 'react';
import { Container, Button, Media } from 'react-bootstrap';
import { Link } from '@reach/router'

const DisplayArticles = props => {
    const { articles, UserLoggedIn } = props
    return (
        <Container>
            <h1>All Articles</h1>
            {articles.map(article => {
                return <ul key={`dispArt${article.article_id}`} className="list-unstyled">
                    <Media as="li">
                        <Media.Body>
                            <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
                            <p> by </p>
                            <Link to={`/users/${article.author}`}>{`${article.author}`}</Link>
                        </Media.Body>
                        <Button>Like ({article.votes})</Button>
                    </Media>
                </ul>
            })}
        </Container>

    )
}

export default DisplayArticles
