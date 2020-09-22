import React, { Component } from "react";

import "./RuleRow.css";

export default class RuleRow extends Component {
  render() {
    return (
      <tr className="RuleRow">
        <td
          className={`Row ${this.props.score !== undefined && "Used"}`}
          onClick={
            this.props.score === undefined ? this.props.handleClick : null
          }
        >
          <div className="Row-Name">{this.props.name}</div>
          <div className="Row-Description">
            {this.props.score !== undefined
              ? `${this.props.score} pts.`
              : this.props.description}
          </div>
        </td>
      </tr>
    );
  }
}
