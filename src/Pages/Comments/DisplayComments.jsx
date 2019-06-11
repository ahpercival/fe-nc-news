import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from '@reach/router'
import UpdateCommentVote from './PatchCommentVote'
import { convertDate } from '../../utils'

class DisplayComments extends Component {
    state = {
        changeVotes: 0
    }

    render() {
        return (
            <Container>
                <h3>Comments</h3>
                <ul>
                    {this.props.comments.map(comment => {
                        return (<div key={`body${comment.comment_id}`}>
                            <li>{comment.body}</li>
                            <li>written by: <Link to={`/users/${comment.author}`}>{`${comment.author}`} </Link></li>
                            <li>posted at: {convertDate(comment.created_at)}</li>
                            <li>Total likes: {comment.votes}</li>
                            {this.props.userLoggedIn === comment.author &&
                                <Button onClick={() => { this.props.pressDeleteComment(comment.comment_id) }}>
                                    Delete
                                    </Button>
                            }
                            <UpdateCommentVote
                                vote={comment.votes}
                                commentID={comment.comment_id}
                                userLoggedIn={this.props.userLoggedIn}
                            />
                        </div>
                        )
                    })}
                </ul>
            </Container>
        )
    }

}

export default DisplayComments