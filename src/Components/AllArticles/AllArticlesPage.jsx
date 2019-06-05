import React, { Component } from 'react';
import DisplayArticles from './DisplayArticles'
import { getAllArticles } from '../../api'

class AllArticles extends Component {
    state = { articles: [], page: 1 }

    componentDidMount() {
        getAllArticles().then((articles) => {
            this.setState({ articles });
        });
    }
    render() {
        return (<div>
            {this.state.articles && (<DisplayArticles userLoggedIn={this.props.userLoggedIn} articles={this.state.articles} />)}
            <button>Prev Page</button>
            <button>Next Page</button>
        </div>)
    }


    changePage = () => { }


}

export default AllArticles


