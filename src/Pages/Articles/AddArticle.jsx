import React, {Component} from "react";
import {Container, Form, Button} from "react-bootstrap";
import {getTopics, postNewArticle} from "../../api";
import {navigate, Link} from "@reach/router";
import AddArticleForm from "../../Components/Articles/AddArticleForm";

class AddArticle extends Component {
  state = {
    topicSelection: [],
    title: "",
    body: "",
    topic: ""
  };

  componentDidMount() {
    getTopics().then(topicSelection => {
      this.setState({topicSelection});
    });
  }

  updateUserInput = (key, event) => {
    this.setState({[key]: event.target.value});
  };

  addNewArticle = event => {
    event.preventDefault();
    const newArticle = {
      author: this.props.userLoggedIn,
      title: this.state.title,
      body: this.state.body,
      topic: this.state.topic
    };
    postNewArticle(newArticle).then(article => {
      navigate(`/articles/${article.article_id}`);
    });
    this.setState({title: "", body: "", topic: ""});
  };

  render() {
    const activeButton =
      !!this.state.title && !!this.state.body && !!this.state.topic;
    return (
      <Container>
        <AddArticleForm
          addNewArticle={this.addNewArticle}
          updateUserInput={this.updateUserInput}
          topicSelection={this.state.topicSelection}
          title={this.state.title}
          body={this.state.body}
          topic={this.state.topic}
        />
      </Container>
    );
  }
}

export default AddArticle;
