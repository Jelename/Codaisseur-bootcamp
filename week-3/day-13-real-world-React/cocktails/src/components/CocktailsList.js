import React, { Component } from 'react';
import request from 'superagent'

export default class CocktailsList extends Component {
  state = {
    cocktailType: null
  }

  componentDidMount() {
    request
      .get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(console.log)
      .catch(console.error)
  }

  render() {
    return (
      <div className="cocktails-list">
        <h1>Cocktails List</h1>

        { this.state.cocktailType === null && 'Loading...' }
      </div>
    )
  }
}
