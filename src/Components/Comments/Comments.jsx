import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from '@reach/router'
import { getCommentsByArticleID } from '../../api'

class Comments extends Component {

    state = { comments: [] }
    componentDidMount() {
        getCommentsByArticleID(this.props.article_id).then(comments => {
            this.setState({ comments });
        })
    }
    render() {
        return (
            < Container >
                <h3> COMMENTS </h3>
                {/* <button>add comment</button> ONLY SHOW IF LOGGED IN */}
                <ul>
                    {this.state.comments.map(comment => {
                        return (<div>
                            <li key={`body${comment.comment_id}`}>{comment.body}</li>
                            <li key={`auth${comment.comment_id}`}>posted by <Link to={`/users/${comment.author}`}>{`${comment.author}`} </Link></li>
                            <li key={`date${comment.comment_id}`}>{comment.created_at}</li>
                            <li key={`vote${comment.comment_id}`}>Total likes: {comment.votes}</li>
                            <button>Like</button>
                            <button>Dislike</button>
                        </div>
                        )
                    })}
                </ul>
            </Container >
        )
    }
}
export default Comments