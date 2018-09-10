/*
	Given an array of integers, return indices of the two numbers such that they add up to a specific target.

	You may assume that each input would have exactly one solution, and you may not use the same element twice.

	Example:

	Given nums = [2, 7, 11, 15], target = 9,

	Because nums[0] + nums[1] = 2 + 7 = 9,
	return [0, 1].
*/

const twoSum = (arr, target) => {
  const memo = {};

  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];
    let diff = target - currNum;
    if (memo[diff] !== undefined) {
      return [memo[diff], i];
    }
    memo[currNum] = i;
  }
};
