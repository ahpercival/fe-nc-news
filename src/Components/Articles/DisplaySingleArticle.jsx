import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from '@reach/router'
import CommentsIndex from '../../Pages/Comments/CommentsIndex'


const DisplaySingleArticle = props => {
    const { article, handleVote } = props

    return (
        <Container>
            <h1><Link to={`/topic/${article.topic}`}>{article.topic}</Link></h1>
            <h2>{article.title}</h2>
            <h4>by <Link to={`/users/${article.author}`}>{`${article.author}`} </Link>
                posted at {article.created_at}</h4>
            <p>{article.body}</p>
            <div>
                <Button disabled={props.changeVotes === 1} onClick={() => { handleVote(1) }}>Like</Button>
                <Button disabled={props.changeVotes === - 1} onClick={() => { handleVote(-1) }}>Dislike</Button>
                <h4>Total likes: {article.votes + props.changeVotes}</h4>
            </div>
            {article.article_id && <CommentsIndex article_id={article.article_id} />}

        </Container>
    )

}


export default DisplaySingleArticle
