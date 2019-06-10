import React, { Component } from 'react';
import './App.css';
import Circle from './Circle/Circle';
import Score from './Score/Score';
import GameOver from './GameOver/GameOver';

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
} /* koska tämä ei ole component  ei tue arrow functionia*/

class App extends Component {

  state = {
    current: 0,
    score: 0, //state muuttuu eli kasvaa tässä
    moves: 0,
    showGameOver: false
  };

  pace = 1500;
  timer = undefined; /* timerilla lopetetaan peli stop game nappulasta*/

  next = () => {

    if (this.state.moves >= 5) {
      this.gameOverHandler();
      return;
    }

    let nextActive = undefined;

    do {
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current);
    this.setState({
      current:nextActive
    });

    this.setState(prevState => {
      return {
        moves: prevState.moves + 1
      };
    });

    this.pace *= 0.95;
    this.timer = setTimeout(this.next.bind(this), this.pace); //?
  }

  startGameHandler = () => {
    this.next();
  }

  clickHandler = (btnId) => {
    console.log('Clicked:', btnId);
    if (this.state.current !== btnId) { /*jos current ei ole sama kuin btnId -> stop*/
      this.gameOverHandler();
      return;
    }

    this.setState({
      moves:0
    });

    this.setState(prevState => {
      return {
        score: prevState.score + 1
      };
    });
  };



  gameOverHandler = () => {
    clearTimeout(this.timer); /*lopettaa pelin*/
    this.setState({ /*to change state*/
      showGameOver: true
    });
  }

  render() {
    const blue = {
      backgroundColor:'blue'
    }

    return (
      <div>
      <h1>| Speedgame |</h1>
      <Score score={this.state.score} />
          <Circle
          active={this.state.current ===1}
          click={() => this.clickHandler(1)} />
          <Circle
          active={this.state.current ===2} click={() => this.clickHandler(2)} />
          <Circle
          active={this.state.current ===3} click={() => this.clickHandler(3)} />
          <Circle
          active={this.state.current ===4} click={() => this.clickHandler(4)} />

      <div className='startstop'>
        <button onClick={this.startGameHandler}>Start game</button>
        <button onClick={this.gameOverHandler}>Stop game</button>
      </div>
      {this.state.showGameOver && <GameOver score={this.state.score} />}
      </div>

    );
  }
}

export default App;
