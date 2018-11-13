const num2L = {
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
  const letters = num2L[digits[index]];
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
