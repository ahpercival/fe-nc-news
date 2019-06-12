import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { getCommentsByArticleID } from '../../api'
import AddComment from './AddComment'
import DisplayComments from './DisplayComments'
import { deleteComment } from '../../api'

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
                <DisplayComments
                    comments={this.state.comments}
                    userLoggedIn={this.props.userLoggedIn}
                    pressDeleteComment={this.pressDeleteComment}
                />
            </Container >
        )
    }

    showNewComment = (postedComment) => {
        this.setState((prevState) => {
            return { comments: [postedComment, ...prevState.comments] }
        })
    }

    pressDeleteComment = comment_id => {
        deleteComment(comment_id)
        this.setState((prevState) => {
            const remainingComments = [...prevState.comments]
            for (let i = 0; i < remainingComments.length; i++) {
                if (remainingComments[i].comment_id === comment_id)
                    remainingComments.splice(i, 1)
            }
            return { comments: remainingComments }
        })
    }

}
export default CommentsIndex