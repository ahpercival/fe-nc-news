import React, { Component } from 'react';
import DisplayArticles from '../../Components/Articles/DisplayArticles'
import AddArticle from './AddArticle'
import { getAllArticles } from '../../api'
import { Container } from 'react-bootstrap';
import Pagination from '../../Components/Navigation/Pagination'

class ArticleIndex extends Component {
    state = {
        articles: [],
        total_count: 0,
        page: 1,
        perPage: 10,
        author: '',
        sort: '',
        filterOptions: ['created_at', 'comment_count', 'votes']
    }

    get prevDisabled() {
        return !(this.state.page - 1)
    }

    get nextDisabled() {
        return (this.state.page === Math.ceil(this.state.total_count / this.state.perPage))
    }

    actions = {
        prev: () => {
            this.setState((state) => {
                return { page: state.page - 1 };
            });
        },
        next: () => {
            this.setState((state) => {
                return { page: state.page + 1 };
            });
        }
    }

    getArticles = () => {
        return getAllArticles({
            topic: this.props.topic,
            p: this.state.page,
            limit: this.state.perPage,
            author: this.props.author,
            sort_by: this.state.sort
        }).then((data) => {

            this.setState({
                articles: data.articles,
                total_count: +data.total_count,
            });
        });
    }

    componentDidMount() {
        this.getArticles()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.topic !== prevProps.topic || this.state.page !== prevState.page || this.props.author !== prevProps.author) {
            this.getArticles()
        }
    }

    sortArticlesBy = event => {
        this.setState({
            sort: event.target.value
            //STATE WILL SET TO WHICHEVER OPTION IS SELECTED BUT ARTICLES NEED TO FILTER
        })
    }

    render() {
        return (
            <Container>
                {this.state.articles && (<DisplayArticles
                    userLoggedIn={this.props.userLoggedIn}
                    articles={this.state.articles}
                    topic={this.props.topic}
                    sortArticlesBy={this.sortArticlesBy}
                    filterOptions={this.state.filterOptions}
                />)}
                <Pagination
                    page={this.state.page}
                    prevDisabled={this.prevDisabled}
                    nextDisabled={this.nextDisabled}
                    actions={this.actions}
                />
                {this.state.articles && this.props.userLoggedIn && <AddArticle topic={this.state.articles.topic} />}
            </Container>)
    }

}

export default ArticleIndex


