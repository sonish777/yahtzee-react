import React, { Component } from "react";

export default class Die extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleClick(e, this.props.idx);
  }
  render() {
    const mapDiceIcon = ["one", "two", "three", "four", "five", "six"];
    const resolveClassname = () => {
      let classname = `Die fas fa-dice-${mapDiceIcon[this.props.val - 1]}`;
      return this.props.locked
        ? classname + " Locked"
        : this.props.rolling
        ? classname + " Rolling"
        : classname;
    };
    return <i className={resolveClassname()} onClick={this.handleClick}></i>;
  }
}
