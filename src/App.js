import React, { Component } from 'react';
// import { Router, Link } from '@reach/router'
import Header from './Components/Header/Header'
import AllArticles from './Components/AllArticles/AllArticlesPage'
import SingleArticle from './Components/SingleArticle/SingleArticlePage'

class App extends Component {
  state = { UserLoggedIn: null }
  render() {
    return (
      // <Router>
      <div>
        <Header path='/*' />
        {/* <AllArticles path='/api/articles' /> */}
        <SingleArticle loginUser={this.loginUser} />
      </div>
      // </Router>
    )
  }

  loginUser = event => {
    this.setState(
      prevState => {
        return {
          UserLoggedIn: prevState.UserLoggedIn = true
        }
      }
    )
  }

}
export default App;
