/*
	Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.
*/

const evenOccurrence = arr => {
  if (!Array.isArray(arr) || !arr.length) {
    return null;
  }
  const cache = arr.reduce((memo, curr) => {
    memo[curr] = ++memo[curr] || 1;
    return memo;
  }, {});

  return arr.find(el => cache[el] % 2 === 0);
};

module.exports = evenOccurrence;
