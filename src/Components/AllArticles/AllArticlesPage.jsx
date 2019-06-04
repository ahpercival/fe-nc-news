import React, { Component } from 'react';
import DisplayArticles from './DisplayArticles'
import { getAllArticles } from '../../api'

class AllArticles extends Component {
    state = { articles: [] }

    componentDidMount() {
        getAllArticles().then((articles) => {
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


