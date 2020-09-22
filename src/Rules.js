class BaseRules {
  constructor(params) {
    Object.assign(this, params);
  }
  count(dice, val) {
    return dice.filter((el) => el === val).length;
  }
  sum(dice) {
    return dice.reduce((acc, val) => acc + val);
  }
  freq(dice) {
    const diceUnique = new Set(dice);
    const freqArr = [];
    diceUnique.forEach((el, i) => {
      let sum = 0;
      dice.forEach((diceVal) => diceVal === el && sum++);
      freqArr.push(sum);
    });
    return freqArr;
  }
}

class SingleNumber extends BaseRules {
  eval = (dice) => {
    return this.count(dice, this.num) * this.num;
  };
}

class NumberOfKind extends BaseRules {
  eval = (dice) => {
    return this.freq(dice).some((el) => el >= this.count) ? this.sum(dice) : 0;
  };
}

class FullHouse extends BaseRules {
  eval = (dice) => {
    const freq = this.freq(dice);
    return (freq.includes(3) && freq.includes(2)) || freq[0] === 5
      ? this.score
      : 0;
  };
}

class SmallStraight extends BaseRules {
  // 1234 or 2345 -- 234 1/5
  // 2345 or 3456 -- 345 2/6
  eval = (dice) => {
    const d = new Set(dice);
    if (d.has(2) && d.has(3) && d.has(4) && (d.has(1) || d.has(5))) {
      return this.score;
    }
    if (d.has(3) && d.has(4) && d.has(5) && (d.has(2) || d.has(6))) {
      return this.score;
    }
    return 0;
  };
}

class LargeStraight extends BaseRules {
  eval = (dice) => {
    const d = new Set(dice);
    if (
      d.has(2) &&
      d.has(3) &&
      d.has(4) &&
      d.has(5) &&
      (d.has(1) || d.has(6))
    ) {
      return this.score;
    }
    return 0;
  };
}

class Yahtzee extends BaseRules {
  eval = (dice) => {
    return this.freq(dice)[0] === 5 ? this.score : 0;
  };
}

const ones = new SingleNumber({ num: 1, description: "Sum of 1's" });
const twos = new SingleNumber({ num: 2, description: "Sum of 2's" });
const threes = new SingleNumber({ num: 3, description: "Sum of 3's" });
const fours = new SingleNumber({ num: 4, description: "Sum of 4's" });
const fives = new SingleNumber({ num: 5, description: "Sum of 5's" });
const sixes = new SingleNumber({ num: 6, description: "Sum of 6's" });

const threeOfKind = new NumberOfKind({
  count: 3,
  description: "3 same dice to sum all",
});
const fourOfKind = new NumberOfKind({
  count: 4,
  description: "4 same dice to sum all",
});

const fullHouse = new FullHouse({
  score: 25,
  description: "3-of-kind & 2-of-kind, 25pts.",
});
const smallStraight = new SmallStraight({
  score: 30,
  description: "4 consecutive dice, 30pts",
});
const largeStraight = new LargeStraight({
  score: 40,
  description: "5 consecutive dice, 40pts",
});

const yahtzee = new Yahtzee({
  score: 50,
  description: "All same dice, 50pts",
});

const chance = new NumberOfKind({
  count: 0,
  description: "Sum of all dice",
});

export {
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  threeOfKind,
  fourOfKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance,
};
