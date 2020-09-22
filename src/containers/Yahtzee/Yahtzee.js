import React, { Component, Fragment } from "react";
import ScoreTable from "../../components/ScoreTable/ScoreTable";
import Dice from "../../components/Dice/Dice";

import "./Yahtzee.css";

class Yahtzee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: Array(this.props.numOfDices)
        .fill(undefined)
        .map((el) => Math.floor(Math.random() * 6) + 1),
      rolling: false,
      locked: Array(this.props.numOfDices).fill(false),
      movesLeft: this.props.noOfMoves,
      gameOver: false,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined,
        total: 0,
        count: 0,
      },
    };
    this.handleRoll = this.handleRoll.bind(this);
    this.handleLock = this.handleLock.bind(this);
    this.handleScore = this.handleScore.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
  }

  static defaultProps = {
    numOfDices: 5,
    noOfMoves: 3,
  };

  handleRoll(e, firstRoll) {
    // console.log(firstRoll);
    !firstRoll && this.setState({ rolling: true });
    const newDiceArr = this.state.dice.map((el, i) =>
      !this.state.locked[i] ? Math.floor(Math.random() * 6) + 1 : el
    );
    setTimeout(() => {
      this.setState((prevState) => {
        return {
          dice: newDiceArr,
          locked:
            prevState.movesLeft <= 1
              ? Array(this.props.numOfDices).fill(true)
              : prevState.locked,
          movesLeft: prevState.movesLeft - 1,
          rolling: false,
        };
      });
    }, 2000);
  }

  handleLock(e, i) {
    const newLockedArr = [...this.state.locked];
    newLockedArr[i] = !this.state.locked[i];
    this.state.movesLeft > 0 &&
      this.setState({
        locked: newLockedArr,
      });
  }

  handleScore(type, scoreEvaluator) {
    const score = scoreEvaluator(this.state.dice);
    const newScore = { ...this.state.scores };
    newScore[type] = score;
    newScore.total += score;
    newScore.count += 1;
    this.setState((st) => {
      return {
        dice: this.state.dice.map((el) => Math.floor(Math.random() * 6) + 1),
        scores: newScore,
        movesLeft: 3,
        locked: Array(this.props.numOfDices).fill(false),
        gameOver: newScore.count === 13 ? true : false,
      };
    });
  }

  handleRestart() {
    this.setState({
      dice: Array(this.props.numOfDices)
        .fill(undefined)
        .map((el) => Math.floor(Math.random() * 6) + 1),
      locked: Array(this.props.numOfDices).fill(false),
      movesLeft: this.props.noOfMoves,
      gameOver: false,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined,
        total: 0,
        count: 0,
      },
    });
  }

  render() {
    return (
      <main className="Yahtzee">
        <h1 className="Main-Heading">YAHTZEE</h1>
        <div className="Dice">
          {!this.state.gameOver ? (
            <Fragment>
              <Dice
                dice={this.state.dice}
                handleLock={this.handleLock}
                locked={this.state.locked}
                rolling={this.state.rolling}
              />
              <button
                className="Btn"
                onClick={this.handleRoll}
                disabled={
                  this.state.movesLeft <= 0 ||
                  this.state.locked.every((el) => el) ||
                  this.state.rolling
                }
              >
                Roll x{this.state.movesLeft}
              </button>
            </Fragment>
          ) : (
            <Fragment>
              <h2 className="GameOver">
                Game Over. Your final score is: {this.state.scores.total}
              </h2>
              <button className="Btn" onClick={this.handleRestart}>
                Play Again
              </button>
            </Fragment>
          )}
        </div>
        <div className="Rules">
          <ScoreTable
            handleScore={this.handleScore}
            scores={this.state.scores}
          />
        </div>
        <div className="GithubLink">
          For Project Github Link, Click{" "}
          <a href="https://github.com/sonish777/yahtzee-react" target="_blank">
            Here
          </a>
        </div>
      </main>
    );
  }
}

export default Yahtzee;
