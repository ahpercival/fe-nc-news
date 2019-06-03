import React, { Component } from 'react';
import Header from './Components/Header/Header'
import AllArticles from './Components/AllArticles/AllArticlesPage'
import SingleArticle from './Components/SingleArticle/SingleArticlePage'

class App extends Component {
  state = { UserLoggedIn: null }
  render() {
    return (
      <div>
        <Header />
        {/* <AllArticles /> */}
        <SingleArticle />
      </div>
    )
  }
}
export default App;
