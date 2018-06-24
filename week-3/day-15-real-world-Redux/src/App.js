import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import AlbumsListContainer from './components/AlbumsListContainer'
import { Route } from 'react-router-dom'
import PhotoPageContainer from './components/PhotoPageContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <main></main>
        </div>
      </Provider>
    );
  }
}

export default App;
