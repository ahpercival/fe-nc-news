import React, {Component} from "react";
import {Container, Button} from "react-bootstrap";
import {patchCommentVote} from "../../api";

class UpdateCommentVote extends Component {
  state = {changeVotes: 0};

  handleVote = newVote => {
    this.setState(prevState => {
      return {changeVotes: prevState.changeVotes + newVote};
    });
    patchCommentVote(
      this.props.commentID,
      this.state.changeVotes + newVote
    ).catch(err => {
      this.setState(prevState => {
        return {changeVotes: prevState.changeVotes - newVote};
      });
    });
  };

  render() {
    return (
      <Container>
        <h4>Total Likes: {this.props.vote + this.state.changeVotes}</h4>
        {this.props.userLoggedIn && (
          <div>
            <Button
              disabled={this.state.changeVotes === -1}
              onClick={() => {
                this.handleVote(-1);
              }}
            >
              Dislike
            </Button>
            <Button
              disabled={this.state.changeVotes === 1}
              onClick={() => {
                this.handleVote(1);
              }}
            >
              Like
            </Button>
          </div>
        )}
      </Container>
    );
  }
}

export default UpdateCommentVote;
