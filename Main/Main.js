import React, { Component } from 'react';
import './Main.css';

class Main extends Component {

  render() {
    return (
<div>
      <div className="speed">
      <div className="button1" id="button0"></div>
      <div className="button1" id="button1"> </div>
      <div className="button1" id="button2"></div>
      <div className="button1" id="button3"></div>
      </div>

      <div className="action">
      <button type="button" onclick="pickNext()">Start game</button>
      <button type="button" onclick="gameOver()">Stop game</button>
      </div>);

</div>);
}
}
export default Main;
