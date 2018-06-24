import React, { Component } from 'react';
import DogsListContainer from './components/DogsListContainer';
import DogBreedImages from './components/DogBreedImages.js'
import DogBreedImagesContainer from './components/DogBreedImagesContainer.js'
import { Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
            <Route exact path="/" component={DogsListContainer} />{/*This is a dum component*/}
            <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
          </main>
      </div>
    );
  }
}

export default App;
