import React, { Component } from 'react';
import logo from './logo.svg';
//import './Title.css';

class Title extends Component {
  render() {
    return (
      <div className="Title">
          <h1>{this.props.content}</h1>
      </div>
    );
  }
}

export default Title;
