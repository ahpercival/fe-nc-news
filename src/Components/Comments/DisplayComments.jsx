import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from '@reach/router'

const DisplayComments = props => {
    return (
        <Container>
            <h3>Comments</h3>
            <ul>
                {props.comments.map(comment => {
                    return (<div key={`body${comment.comment_id}`}>
                        <li>{comment.body}</li>
                        <li>posted by <Link to={`/users/${comment.author}`}>{`${comment.author}`} </Link></li>
                        <li>{comment.created_at}</li>
                        <li>Total likes: {comment.votes}</li>
                        <button>Like</button>
                        <button>Dislike</button>
                    </div>
                    )
                })}
            </ul>
        </Container>
    )


}

export default DisplayComments