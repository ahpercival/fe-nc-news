import React from 'react';
import { Container, Media, Form } from 'react-bootstrap';
import { Link } from '@reach/router'

const DisplayArticles = props => {
    const { articles, sortArticlesBy, filterOptions } = props

    const displayTopicHeader = () => {
        return (<div>
            <h1>{props.topic}</h1>
            <h3>CHANGE TO TOPIC DESCRIPTION</h3>
        </div>)
    }

    return (
        <Container>
            {props.topic ? displayTopicHeader() : <h1>Articles</h1>}
            <Form onChange={sortArticlesBy}>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Sort by:</Form.Label>
                    <Form.Control as="select">
                        {filterOptions.map(filter => {
                            return <option>{filter}</option>
                        })}
                    </Form.Control>
                </Form.Group>
            </Form>
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
