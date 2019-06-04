import React, { Component } from 'react';
import { Router } from '@reach/router'
import Header from './Components/Header/Header'
import AllArticles from './Components/AllArticles/AllArticlesPage'
import SingleArticle from './Components/SingleArticle/SingleArticlePage'

class App extends Component {
  state = { userLoggedIn: null }
  render() {
    return (
      <div>
        <Header loginUser={this.loginUser} />
        <Router>
          <AllArticles path='/home' />
          <AllArticles path='/articles' />
          <SingleArticle path='/articles/:article_id' />
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

}
export default App;
