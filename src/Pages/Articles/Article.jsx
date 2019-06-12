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
        window.scrollTo(0, 0);
    }
    render() {
        const { singleArticle, changeVotes } = this.state
        const { userLoggedIn, article_id } = this.props
        return (<div>
            {singleArticle && (<DisplaySingleArticle
                article={singleArticle}
                handleVote={this.handleVote}
                changeVotes={changeVotes}
                userLoggedIn={userLoggedIn}
                handleDelete={this.handleDelete}
            />)}
            <CommentsIndex article_id={article_id} userLoggedIn={userLoggedIn} />
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