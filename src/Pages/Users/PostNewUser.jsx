import React, {Component} from "react";
import NewUserForm from "../../Components/Users/NewUserForm";
import {postNewUser} from "../../api";
import {navigate} from "@reach/router";

class PostNewUser extends Component {
  state = {username: "", name: "", avatar_url: ""};

  updateUserInput = (userInfo, event) => {
    this.setState({[userInfo]: event.target.value});
  };

  addNewUser = event => {
    event.preventDefault();
    postNewUser(
      this.state.username,
      this.state.name,
      this.state.avatar_url
    ).then(user => {
      navigate(`/users/${user.username}`);
    });
    this.setState({username: "", name: "", avatar_url: ""});
  };

  render() {
    return (
      <NewUserForm
        updateUserInput={this.updateUserInput}
        username={this.state.username}
        name={this.state.name}
        avatar_url={this.state.avatar_url}
        addNewUser={this.addNewUser}
      />
    );
  }
}

export default PostNewUser;
