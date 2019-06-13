import React, { Component } from 'react';
import { Router } from '@reach/router'
import Header from './Pages/Header/Header'
import ArticleIndex from './Pages/Articles/ArticleIndex'
import Article from './Pages/Articles/Article'
import UsersIndex from './Pages/Users/UserIndex'
import User from './Pages/Users/User'
import HomePage from './Components/HomePage/HomePage'
import TopicIndex from './Pages/Topic/TopicIndex'
import FooterDisplay from './Components/Navigation/FooterDisplay'
import './assets/css/styles.scss';


class App extends Component {
  state = { userLoggedIn: null }
  
  loginUser = event => {
    this.setState({userLoggedIn: event.username})}

  logoutUser = () => {
    this.setState({userLoggedIn: null})}

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
          <UsersIndex path='/users' userLoggedIn={this.state.userLoggedIn} />
          <User path='/users/:username' />
          <TopicIndex path='/topic' userLoggedIn={this.state.userLoggedIn} />
        </Router>
        <FooterDisplay />
      </div>
    )
  }

}
export default App;
