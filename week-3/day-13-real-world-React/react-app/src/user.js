import React, { Component } from 'react';
//import './Title.css';

class User extends Component {
  state = { active: false }
  toggle = () => {
    this.setState({
      active: !this.state.active
    })
  }
  render() {
    return (
      <div>
        <div className="User">
          <p>User: <b>{this.props.name}</b></p>
          <p>{this.props.name} <b>{this.state.active ? 'is not' : 'is' }</b> present</p>
          <button onClick={this.toggle}>Toggle</button>
        </div>
      </div>
    );
  }
}

export default User;
