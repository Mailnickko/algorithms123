/*
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
*/

const groupAnagrams = strs => {
  const grouped = strs.reduce((memo, curr) => {
    const sorted = curr
      .split('')
      .sort()
      .join('');
    if (!memo[sorted]) {
      memo[sorted] = [curr];
    } else {
      memo[sorted].push(curr);
    }
    return memo;
  }, {});

  return Object.values(grouped);
};
