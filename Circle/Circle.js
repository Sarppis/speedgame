import React, { Component } from 'react';
import './Circle.css';

class Circle extends Component {
render() {
  return (
    <div style={{backgroundColor: this.props.active ? this.props.activeColor : this.props.buttonColor}}  className={'Circle' + (this.props.active ? ' active':'')} onClick={this.props.click}></div> // if else

  )
}

}
export default Circle;
