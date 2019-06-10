import React, { Component } from 'react';
import DisplaySingleArticle from '../../Components/Articles/DisplaySingleArticle'
import { getSingleArticle, patchArticleVote, deleteArticle } from '../../api'
import CommentsIndex from '../Comments/CommentsIndex'
import { navigate } from '@reach/router'

class Article extends Component {
    state = { singleArticle: {}, changeVotes: 0 }
    componentDidMount() {
        getSingleArticle(this.props.article_id).then((article) => {
            this.setState({ singleArticle: article, vote: article.votes });
        })
    }
    render() {
        return (<div>
            {this.state.singleArticle && (<DisplaySingleArticle
                article={this.state.singleArticle}
                handleVote={this.handleVote}
                changeVotes={this.state.changeVotes}
                userLoggedIn={this.props.userLoggedIn}
                handleDelete={this.handleDelete}
            />)}
            <CommentsIndex article_id={this.props.article_id} userLoggedIn={this.props.userLoggedIn} />
        </div>)
    }

    handleVote = (newVote) => {
        this.setState(prevState => {
            return { changeVotes: prevState.changeVotes + newVote }
        })
        patchArticleVote(this.props.article_id, this.state.changeVotes + newVote)
            .catch(err => {
                this.setState(prevState => {
                    return { changeVotes: prevState.changeVotes - newVote }
                })
            })
    }

    handleDelete = (article_id) => {
        deleteArticle(article_id)
        navigate('/articles')
    }

}

export default Article