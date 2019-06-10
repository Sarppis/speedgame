import React, { Component } from 'react';
import './GameOver.css';

class GameOver extends Component {

  closeHandler = () => {
    window.location.reload();
  }

  render() {
    return (
      <div id='result'>
        <div className='gameoverbox'>
             <p id='gameover'>Game over! Your final score is {this.props.score} </p>
          <button onClick={this.closeHandler}> Close</button>
        </div>
      </div>
    );
  }
}

export default GameOver;
