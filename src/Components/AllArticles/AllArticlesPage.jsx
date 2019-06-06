import React, { Component } from 'react';
import DisplayArticles from './DisplayArticles'
import AddArticle from './AddArticle'
import { getAllArticles } from '../../api'
import { Container } from 'react-bootstrap';

class AllArticles extends Component {
    state = { articles: [], total_count: 0, page: 1 }

    componentDidMount() {
        getAllArticles(this.props.topic).then((articles) => {

            this.setState({ articles });
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.topic !== prevProps.topic) {
            getAllArticles(this.props.topic).then((articles) => {
                this.setState({ articles });
            });
        }
    }

    render() {
        return (<Container>
            {this.state.articles && (<DisplayArticles userLoggedIn={this.props.userLoggedIn} articles={this.state.articles} />)}
            <button>Prev Page</button>
            <button>Next Page</button>
            {this.state.articles && this.props.userLoggedIn && <AddArticle topic={this.state.articles.topic} />}
        </Container>)
    }

    // changePage = (pageNumber) => {}


}

export default AllArticles


