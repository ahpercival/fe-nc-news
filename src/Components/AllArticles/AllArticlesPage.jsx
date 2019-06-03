import React, { Component } from 'react';
import axios from 'axios'
import DisplayArticles from './DisplayArticles'

class AllArticles extends Component {
    state = { articles: [] }

    componentDidMount() {
        const url = 'https://ahp-nc-news.herokuapp.com/api/articles';
        axios.get(url).then(({ data: { articles } }) => {
            this.setState({ articles });
        });
    }
    render() {
        return (<div>
            {this.state.articles && (<DisplayArticles articles={this.state.articles} />)}
        </div>)
    }

}

export default AllArticles


