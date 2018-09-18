/*
Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

The same repeated number may be chosen from candidates unlimited number of times.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
Example 2:

Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]

*/

const helper = (cand, target, combos = [], curr = [], start = 0) => {
  if (target === 0) {
    return combos.push([...curr]);
  }

  for (let i = start; i < cand.length; i++) {
    // we will overshoot the target otherwise
    if (cand[i] <= target) {
      curr.push(cand[i]);
      helper(cand, target - cand[i], combos, curr, i);
      curr.pop();
    } else {
      // no need to go through the rest
      return;
    }
  }
};

const combinationSum = (candidates, target) => {
  const combos = [];
  candidates.sort((a, b) => a - b);
  helper(candidates, target, combos, [], 0);
  return combos;
};
