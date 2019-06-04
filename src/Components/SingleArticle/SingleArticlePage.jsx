import React, { Component } from 'react';
import axios from 'axios'
import DisplaySingleArticle from './DisplaySingleArticle'

class SingleArticle extends Component {

    state = { singleArticle: {} }

    componentDidMount() {
        const url = 'https://ahp-nc-news.herokuapp.com/api/articles/1';//<<<<<CHANGE THIS TO GENERIC LINK & CREATE AXIOS REQUEST FILE
        axios.get(url).then(({ data: { article } }) => {
            this.setState({ singleArticle: article });
        });
    }

    render() {
        return (<div>
            <DisplaySingleArticle article={this.state.singleArticle} />

        </div>)
    }
}

export default SingleArticle