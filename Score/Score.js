import React, { Component } from 'react';
import './Score.css';

class Score extends Component {

  render() {
    return (
      <div>Your score is {this.props.score}</div>
    );
  }
}

export default Score;
