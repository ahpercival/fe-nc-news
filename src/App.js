import React, { Component } from 'react';
import Header from './Components/Header/Header'
import AllArticles from './Components/AllArticles/AllArticlesPage'

class App extends Component {
  state = { UserLoggedIn: null }
  render() {
    return (
      <div>
        <Header />
        <AllArticles />
      </div>
    )
  }
}
export default App;
