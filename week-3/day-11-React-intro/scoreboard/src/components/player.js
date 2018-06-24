import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Player extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <h2>{this.props.score}</h2>
        <button clasName="increment">+</button>
        <button clasName="decrement">-</button>
      </div>


    )
  }
}
