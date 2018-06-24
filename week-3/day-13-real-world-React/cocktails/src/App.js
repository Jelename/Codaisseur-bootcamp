import React, { Component } from 'react';
import CocktailsList from './components/CocktailsList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main><CocktailsList /></main>
      </div>
    );
  }
}

export default App;
