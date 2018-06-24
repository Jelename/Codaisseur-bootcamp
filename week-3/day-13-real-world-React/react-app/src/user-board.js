import React, { Component } from 'react';
import User from './user';

class UserBoard extends Component {
  state: [
    'Alice',
    'Bob',
    'Charlie'
  ]

  render() {
    return (
      <div>
        <h3>User Board</h3>
        <p>{this.state.map(username => <User name: {username}/>)}</p>
      </div>
    );
  }
}

export default UserBoard;
