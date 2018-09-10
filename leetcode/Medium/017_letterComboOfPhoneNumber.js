// Given a digit string, return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below.

// Input:Digit string "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// Note:
// Although the above answer is in lexicographical order, your answer could be in any order you want.

// Hide Company Tags Amazon Dropbox Google Uber Facebook
// Hide Tags Backtracking String
// Hide Similar Problems (M) Generate Parentheses (M) Combination Sum

/**
 * @param {string} digits
 * @return {string[]}
 */

var numToLetters = {
  '0': '',
  '1': '',
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz'
};

const helper = (res = [], digits = '', index = 0, curr = '') => {
  // base case
  if (index === digits.length) {
    res.push(curr);
    return;
  }

  const letters = numToLetters[digits[index]];
  letters.split('').forEach(char => {
    helper(res, digits, index + 1, curr + char);
  });
};

const letterCombinations = digits => {
  const res = [];
  if (!digits || !digits.length) {
    return res;
  }
  helper(res, digits);
  return res;
};
