/*
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/

const subsets = nums => {
  const res = [[]];
  nums.forEach(num => {
    res.forEach(val => {
      res.push([...val, num]);
    });
  });
  return res;
};

// alternate backtracking
const subsets2 = nums => {
  const res = [];

  const subroutine = (curr, remain, start) => {
    res.push(curr);
    for (let i = start; i < remain.length; i++) {
      subroutine([...curr, remain[i]], [...remain.slice(0, i), ...remain.slice(i + 1)], start);
      start++;
    }
  };

  subroutine([], nums, 0);

  return res;
};

// another alternate, easier to understand

const helper = (nums, res, start, curr = []) => {
  if (start === 0) {
    res.push([]);
  }
  for (let i = start; i < nums.length; i++) {
    curr.push(nums[i]);
    res.push([...curr]);
    helper(num, res, i + 1, curr);
    curr.pop();
  }
};

const subsets3 = nums => {
  const res = [];
  helper(nums, res, 0, []);
  return res;
};
