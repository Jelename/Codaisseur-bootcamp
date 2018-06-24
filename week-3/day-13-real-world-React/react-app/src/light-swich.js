import React, { Component } from 'react';

export default class LightSwitch extends Component {
  state = {active: true}

  toggle = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (
      <div>
        <h1>The light switch is <b>{this.state.active ? 'on' : 'off'}</b></h1>
        <button onClick={this.toggle}>Toggle</button>
      </div>
    )
  }
}
