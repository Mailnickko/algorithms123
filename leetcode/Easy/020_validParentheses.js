/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/

const isValid = str => {
  if (str.length === 0) {
    return true;
  }

  if (str.length % 2 !== 0) {
    return false;
  }
  const cache = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  const memo = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (cache[char]) {
      memo.push(cache[char]);
    } else {
      if (char !== memo.pop()) {
        return false;
      }
    }
  }
  return memo.length === 0;
};
