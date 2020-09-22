import React, { Component } from "react";

import "./Dice.css";
import Die from "./Die";

export default class Dice extends Component {
  render() {
    return (
      <div className="Dice">
        {this.props.dice.map((die, i) => (
          <Die
            val={die}
            key={i}
            handleClick={this.props.handleLock}
            idx={i}
            locked={this.props.locked[i]}
            rolling={this.props.rolling}
          />
        ))}
      </div>
    );
  }
}
