/*
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

Each number in candidates may only be used once in the combination.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8,
A solution set is:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
Example 2:

Input: candidates = [2,5,2,1,2], target = 5,
A solution set is:
[
  [1,2,2],
  [5]
]
*/

var helper = (cand, target, res = [], curr = [], index) => {
  if (target === 0) {
    res.push([...curr]);
  }

  for (let i = index; i < cand.length; i++) {
    if (i > index && cand[i] === cand[i - 1]) {
      continue;
    }
    if (cand[i] <= target) {
      curr.push(cand[i]);
      helper(cand, target - cand[i], res, curr, i + 1);
      curr.pop();
    } else {
      return;
    }
  }
};

var combinationSum2 = function(candidates, target) {
  const res = [];
  candidates.sort((a, b) => a - b);
  debugger;
  helper(candidates, target, res, [], 0);
  return res;
};
