import React, { Component } from "react";
import RuleRow from "../RuleRow/RuleRow";

import "./ScoreTable.css";

import * as allRules from "../../Rules";

export default class ScoreTable extends Component {
  render() {
    const { scores, handleScore } = this.props;
    return (
      <div className="ScoreTable">
        <h3 className="Table-Heading">SINGLES</h3>
        <table cellPadding="5px" className="Table">
          <tbody>
            <RuleRow
              name="Ones"
              description={allRules.ones.description}
              handleClick={(e) => handleScore("ones", allRules.ones.eval)}
              score={scores.ones}
            />
            <RuleRow
              name="Twos"
              description={allRules.twos.description}
              handleClick={(e) => handleScore("twos", allRules.twos.eval)}
              score={scores.twos}
            />
            <RuleRow
              name="Threes"
              description={allRules.threes.description}
              handleClick={(e) => handleScore("threes", allRules.threes.eval)}
              score={scores.threes}
            />
            <RuleRow
              name="Fours"
              description={allRules.fours.description}
              handleClick={(e) => handleScore("fours", allRules.fours.eval)}
              score={scores.fours}
            />
            <RuleRow
              name="Fives"
              description={allRules.fives.description}
              handleClick={(e) => handleScore("fives", allRules.fives.eval)}
              score={scores.fives}
            />
            <RuleRow
              name="Sixes"
              description={allRules.sixes.description}
              handleClick={(e) => handleScore("sixes", allRules.sixes.eval)}
              score={scores.sixes}
            />
          </tbody>
        </table>
        <h3 className="Table-Heading">SPECIALS</h3>
        <table cellPadding="5px" className="Table">
          <tbody>
            <RuleRow
              name="Three of a kind"
              description={allRules.threeOfKind.description}
              handleClick={(e) =>
                handleScore("threeOfKind", allRules.threeOfKind.eval)
              }
              score={scores.threeOfKind}
            />
            <RuleRow
              name="Four of a kind"
              description={allRules.fourOfKind.description}
              handleClick={(e) =>
                handleScore("fourOfKind", allRules.fourOfKind.eval)
              }
              score={scores.fourOfKind}
            />
            <RuleRow
              name="Full house"
              description={allRules.fullHouse.description}
              handleClick={(e) =>
                handleScore("fullHouse", allRules.fullHouse.eval)
              }
              score={scores.fullHouse}
            />
            <RuleRow
              name="Small Straight"
              description={allRules.smallStraight.description}
              handleClick={(e) =>
                handleScore("smallStraight", allRules.smallStraight.eval)
              }
              score={scores.smallStraight}
            />
            <RuleRow
              name="Large Straight"
              description={allRules.largeStraight.description}
              handleClick={(e) =>
                handleScore("largeStraight", allRules.largeStraight.eval)
              }
              score={scores.largeStraight}
            />
            <RuleRow
              name="Yahtzee"
              description={allRules.yahtzee.description}
              handleClick={(e) => handleScore("yahtzee", allRules.yahtzee.eval)}
              score={scores.yahtzee}
            />
            <RuleRow
              name="Chance"
              description={allRules.chance.description}
              handleClick={(e) => handleScore("chance", allRules.chance.eval)}
              score={scores.chance}
            />
          </tbody>
        </table>
        <div className="Total">
          <h3 className="Table-Heading">TOTAL</h3>
          <h3 className="Table-Heading">{scores.total} pts.</h3>
        </div>
      </div>
    );
  }
}
