import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import { patchCommentVote } from '../../api'

class UpdateCommentVote extends Component {
    state = { changeVotes: 0 }

    render() {

        return (
            <Container>
                <h4>Total Vote: {this.props.vote}</h4>
                <Button onClick={() => { this.handleVote(1) }}>Like</Button>
                <Button onClick={() => { this.handleVote(-1) }}>Dislike</Button>
            </Container >
        )
    }

    handleVote = (newVote) => {
        this.setState(prevState => {
            return { changeVotes: prevState.changeVotes + newVote }
        })
        patchCommentVote(this.props.commentID, this.state.changeVotes + newVote)
            .catch(err => {
                this.setState(prevState => {
                    return { changeVotes: prevState.changeVotes - newVote }
                })
            })
    }

}


export default UpdateCommentVote