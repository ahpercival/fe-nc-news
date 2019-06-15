import React, {Component} from "react";
import DisplayArticles from "../../Components/Articles/DisplayArticles";
import AddArticle from "./AddArticle";
import {getAllArticles} from "../../api";
import {Container} from "react-bootstrap";
import Pagination from "../../Components/Navigation/Pagination";

class ArticleIndex extends Component {
  state = {
    articles: [],
    total_count: 0,
    page: 1,
    perPage: 10,
    author: "",
    sort: "",
    filterOptions: ["created_at", "comment_count", "votes"]
  };

  get prevDisabled() {
    return !(this.state.page - 1);
  }

  get nextDisabled() {
    return (
      this.state.page === Math.ceil(this.state.total_count / this.state.perPage)
    );
  }

  actions = {
    prev: () => {
      this.setState(state => {
        return {page: state.page - 1};
      });
    },
    next: () => {
      this.setState(state => {
        return {page: state.page + 1};
      });
    }
  };

  getArticles = () => {
    const {page, perPage, sort} = this.state;
    const {topic, author} = this.props;
    return getAllArticles({
      topic: topic,
      p: page,
      limit: perPage,
      author: author,
      sort_by: sort
    }).then(data => {
      this.setState({
        articles: data.articles,
        total_count: +data.total_count
      });
    });
  };

  componentDidMount() {
    this.getArticles();
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps, prevState) {
    const {author, page, sort, total_count} = this.state;
    const {topic, uri} = this.props;

    if (topic !== prevProps.topic || sort !== prevState.sort) {
      this.setState({
        page: 1,
        total_count: 0
      });
    }

    if (
      topic !== prevProps.topic ||
      page !== prevState.page ||
      author !== prevProps.author ||
      sort !== prevState.sort ||
      total_count !== prevState.total_count ||
      uri !== prevProps.uri
    ) {
      this.getArticles();
    }
  }

  sortArticlesBy = event => {
    this.setState({
      sort: event.target.value
    });
  };

  render() {
    const {articles, filterOptions, page} = this.state;
    const {topic, userLoggedIn} = this.props;
    return (
      <Container>
        {articles && (
          <DisplayArticles
            userLoggedIn={userLoggedIn}
            articles={articles}
            topic={topic}
            sortArticlesBy={this.sortArticlesBy}
            filterOptions={filterOptions}
          />
        )}
        <Pagination
          page={page}
          prevDisabled={this.prevDisabled}
          nextDisabled={this.nextDisabled}
          actions={this.actions}
        />
        {articles && userLoggedIn && (
          <AddArticle userLoggedIn={userLoggedIn} topic={articles.topic} />
        )}
      </Container>
    );
  }
}

export default ArticleIndex;
