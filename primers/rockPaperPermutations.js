/*
	Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.
*/

const helper = (res, hands, num, temp = [], count = 0) => {
  if (count === num) {
    res.push(temp);
    return;
  }
  hands.forEach((hand, i) => {
    // temp.push(hand);
    helper(res, hands, num, temp.concat(hand), count + 1);
    // temp.pop();
  });
};

const rockPaperPermutation = num => {
  if (isNaN(num)) {
    return null;
  }
  if (!num) {
    return [];
  }
  const res = [];
  const hands = ['r', 'p', 's'];
  helper(res, hands, num);
  return res;
};

module.exports = rockPaperPermutation;
