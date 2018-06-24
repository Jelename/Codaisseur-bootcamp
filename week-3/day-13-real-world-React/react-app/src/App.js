import React, { Component } from 'react';
//import Title from './title';
import LightSwitch from './light-swich';
import UserBoard from './user-board';

import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <UserBoard />
        <LightSwitch />
      </div>
    );
  }
}

export default App;
