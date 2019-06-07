import React from 'react';
import { Container, Media } from 'react-bootstrap';
import { Link } from '@reach/router'

const DisplayArticles = props => {
    const { articles } = props
    return (
        <Container>
            <h1>Articles</h1>
            {articles.map(article => {
                return <ul key={`dispArt${article.article_id}`} className="list-unstyled">
                    <Media as="li">
                        <Media.Body>
                            <h5> <Link to={`/articles/${article.article_id}`}>{article.title} </Link>
                                by <Link to={`/users/${article.author}`}>{`${article.author}`}</Link></h5>
                        </Media.Body>
                    </Media>
                </ul>
            })}
        </Container>

    )
}

export default DisplayArticles