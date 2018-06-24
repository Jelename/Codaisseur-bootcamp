import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'; //importing Provider as an object, that is why its in between curly braces
import store from './store'; //after provider, we have to import store
import AlbumsListContainer from './components/AlbumsListContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AlbumsListContainer />
        </div>
      </Provider>
    );
  }
}


export default App;
