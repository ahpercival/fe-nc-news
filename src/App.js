import React, { Component } from 'react';
import { Router } from '@reach/router'
import Header from './Pages/Header/Header'
import ArticleIndex from './Pages/Articles/ArticleIndex'
import Article from './Pages/Articles/Article'
import UsersIndex from './Pages/Users/UserIndex'
import User from './Pages/Users/User'
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
          <ArticleIndex userLoggedIn={this.state.userLoggedIn} path='/articles' />
          <ArticleIndex userLoggedIn={this.state.userLoggedIn} path='/topic/:topic' />
          <Article path='/articles/:article_id' userLoggedIn={this.state.userLoggedIn} />
          <UsersIndex path='/users' />
          <User path='/users/:username' />
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
