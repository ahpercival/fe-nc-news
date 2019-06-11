import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from '@reach/router'
import { convertDate } from '../../utils'

const DisplaySingleArticle = props => {
    const { article, handleVote, handleDelete } = props

    return (
        <Container>
            <h1><Link to={`/topic/${article.topic}`}>{article.topic}</Link></h1>
            <h2>{article.title}</h2>
            <h4>by <Link to={`/users/${article.author}`}>{`${article.author}`} </Link>
                posted at {convertDate(article.created_at)}</h4>
            {props.userLoggedIn === article.author &&
                <Button onClick={() => { handleDelete(article.article_id) }}>
                    Delete article
                </Button>}
            <p>{article.body}</p>
            {
                props.userLoggedIn && <div>
                    <Button disabled={props.changeVotes === 1} onClick={() => { handleVote(1) }}>Like</Button>
                    <Button disabled={props.changeVotes === - 1} onClick={() => { handleVote(-1) }}>Dislike</Button>
                </div>
            }
            <h4>Total likes: {article.votes + props.changeVotes}</h4>
        </Container >
    )

}

export default DisplaySingleArticle
