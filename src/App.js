import React, { Component } from 'react';
import SearchBar from './components/searchBar';
import InputField from './components/inputField';
import NewsFeed from './components/posts';
import '../node_modules/bulma/bulma.sass';


class App extends Component {


  render() {
    return (
      <div>
        <SearchBar/>
        <InputField />
        <NewsFeed />
      </div>
    );
  }
}

export default App;
