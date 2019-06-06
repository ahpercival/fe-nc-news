import React, { Component } from 'react';
import DisplaySingleArticle from './DisplaySingleArticle'
import { getSingleArticle, patchArticleVote } from '../../api'

class SingleArticle extends Component {
    state = { singleArticle: {}, changeVotes: 0 }
    componentDidMount() {
        getSingleArticle(this.props.article_id).then((article) => {
            this.setState({ singleArticle: article, vote: article.votes });
        })
    }
    render() {
        return (<div>
            {this.state.singleArticle && (<DisplaySingleArticle article={this.state.singleArticle} handleVote={this.handleVote} changeVotes={this.state.changeVotes} />)}
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

}

export default SingleArticle