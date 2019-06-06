import React, { Component } from 'react';
import { Router } from '@reach/router'
import Header from './Components/Header/Header'
import AllArticles from './Components/AllArticles/AllArticlesPage'
import SingleArticle from './Components/SingleArticle/SingleArticlePage'
import AllUsersPage from './Components/AllUsers/AllUsersPage'
import SingleUserPage from './Components/SingleUser/SingleUserPage'
import HomePage from './Components/HomePage/HomePage'


class App extends Component {
  state = { userLoggedIn: null }
  render() {
    return (
      <div>
        <Header loginUser={this.loginUser} logoutUser={this.logoutUser} userLoggedIn={this.state.userLoggedIn} />
        <Router primary={false}>
          <HomePage userLoggedIn={this.state.userLoggedIn} path='/' />
          <HomePage userLoggedIn={this.state.userLoggedIn} path='/home' />
          <AllArticles userLoggedIn={this.state.userLoggedIn} path='/articles' />
          <AllArticles userLoggedIn={this.state.userLoggedIn} path='/topic/:topic' />
          <SingleArticle path='/articles/:article_id' />
          <AllUsersPage path='/users' />
          <SingleUserPage path='/users/:username' />
        </Router>
      </div>
    )
  }

  loginUser = event => {
    this.setState(
      prevState => {
        return {
          userLoggedIn: prevState.userLoggedIn = event.username
        }
      }
    )
  }

  logoutUser = event => {
    this.setState(
      prevState => {
        return {
          userLoggedIn: prevState.userLoggedIn = null
        }
      }
    )
  }

}
export default App;
