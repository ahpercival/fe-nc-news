import React, { Component } from 'react';
import { Container, Button, Card } from 'react-bootstrap';
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
                            <Card style={{ width: '60rem' }}>
                                <Card.Body>
                                    <Card.Title>{comment.body}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">written by: <Link to={`/users/${comment.author}`}>{`${comment.author}`} </Link></Card.Subtitle>
                                    <Card.Text>
                                        posted at: {convertDate(comment.created_at)}
                                        <br />
                                        <UpdateCommentVote
                                            vote={comment.votes}
                                            commentID={comment.comment_id}
                                            userLoggedIn={this.props.userLoggedIn}
                                        />
                                        {this.props.userLoggedIn === comment.author &&
                                            <Button onClick={() => { this.props.pressDeleteComment(comment.comment_id) }}>
                                                Delete Comment
                                            </Button>
                                        }
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        )
                    })}
                </ul>
            </Container>
        )
    }

}

export default DisplayComments