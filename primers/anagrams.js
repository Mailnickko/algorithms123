/*
	Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array. At first, don’t worry about repeated strings.
*/

const helper = (res, curr, remain) => {
  if (remain === '') {
    res[curr] = true;
    return;
  }
  for (let i = 0; i < remain.length; i++) {
    helper(res, curr + remain[i], remain.slice(0, i) + remain.slice(i + 1));
  }
};

const anagrams = str => {
  if (typeof str !== 'string') {
    return null;
  }
  const res = {};
  helper(res, '', str);
  return Object.keys(res);
};

module.exports = anagrams;
