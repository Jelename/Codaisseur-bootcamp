import React, { Component } from 'react';
import Scoreboard from './components/scoreboard.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Scoreboard />
        </main>
      </div>
    );
  }
}

export default App;
