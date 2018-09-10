/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

const threeSum = nums => {
  const res = [];
  if (nums.length < 3) {
    return res;
  }
  const sorted = nums.sort((a, b) => a - b);
  let next;
  let end;
  let sum;

  for (let i = 0; i < sorted.length - 2; i++) {
    // if curr num is greater than 0, abort
    if (sorted[i] > 0) {
      return res;
    }
    // only run on init or if start num is larger than last num
    if (i === 0 || sorted[i] > sorted[i - 1]) {
      next = i + 1;
      end = nums.length - 1;
      sum = 0;
      while (next < end) {
        sum = nums[i] + nums[next] + nums[end];

        if (sum < 0) {
          next++;
        } else if (sum > 0) {
          end--;
        } else {
          // sum === 0
          res.push([nums[i], nums[next], nums[end]]);
          next++;
          end--;

          // skip same nums
          while (next < end && nums[next] === nums[next - 1]) {
            next++;
          }
          while (next < end && nums[end] === nums[end + 1]) {
            end--;
          }
        }
      }
    }
  }
  return res;
};
