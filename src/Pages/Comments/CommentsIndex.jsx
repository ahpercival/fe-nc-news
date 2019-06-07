import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { getCommentsByArticleID } from '../../api'
import AddComment from './AddComment'
import DisplayComments from '../../Components/Comments/DisplayComments'

class CommentsIndex extends Component {

    state = {
        comments: [],
    }
    componentDidMount() {
        getCommentsByArticleID(this.props.article_id).then(comments => {
            this.setState({ comments });
        })
    }
    render() {
        return (
            < Container >
                {this.props.userLoggedIn && <AddComment userLoggedIn={this.props.userLoggedIn} article_id={this.props.article_id} showNewComment={this.showNewComment} />}
                <DisplayComments comments={this.state.comments} />
            </Container >
        )
    }

    showNewComment = (postedComment) => {
        this.setState((currentState) => {
            return { comments: [postedComment, ...currentState.comments] }
        })
    }

}
export default CommentsIndex