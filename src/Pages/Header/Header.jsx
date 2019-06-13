import React, {Component} from "react";
import {getTopics, getUserbyUsername} from "../../api";
import HeaderDisplay from "../../Components/Navigation/HeaderDisplay";
import NavbarDisplay from "../../Components/Navigation/NavbarDisplay";
import WrongUsername from "./WrongUsername";

class Header extends Component {
  state = {userInput: "", correctUsername: null, topics: []};

  componentDidMount() {
    getTopics().then(topics => {
      this.setState({topics});
    });
  }

  updateUserInput = event => {
    this.setState({userInput: event.target.value});
  };

  logInAsGuest = event => {
    this.setState({userInput: "Guest"});
  };

  submitUsername = event => {
    event.preventDefault();
    getUserbyUsername(this.state.userInput)
      .then(user => {
        this.setState({correctUsername: true});
        this.props.loginUser(user);
      })
      .catch(error => {
        error && this.setState({correctUsername: false});
      });
  };

  selectSignOut = event => {
    event.preventDefault();
    this.props.logoutUser();
    this.setState({userInput: "", correctUsername: true});
  };

  render() {
    return (
      <div>
        <HeaderDisplay />
        <NavbarDisplay
          topics={this.state.topics}
          userInput={this.state.userInput}
          userLoggedIn={this.props.userLoggedIn}
          selectSignOut={this.selectSignOut}
          submitUsername={this.submitUsername}
          updateUserInput={this.updateUserInput}
          logInAsGuest={this.logInAsGuest}
        />
        {this.state.correctUsername === false && (
          <WrongUsername selectSignOut={this.selectSignOut} />
        )}
      </div>
    );
  }
}

export default Header;
