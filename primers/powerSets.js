/*
	Return an array that contains the power set of a given string. The power set is a set of all the possible subsets, including the empty set.

	Make sure your code does the following:

	All characters in a subset should be sorted alphabetically, and the array of subsets should be sorted alphabetically.
	Sets of the same characters are considered duplicates regardless of order and count only once, e.g. ‘ab’ and ‘ba’ are the same.
	Duplicate characters in strings should be ignored; for example, ‘obama’ should be evaluated as if it only contained one ‘a’. See the result below.
*/
const powerSets = str => {
  if (typeof str !== 'string') {
    return null;
  }
  const deduped = Array.from(new Set(str)).sort();
  const res = [];
  deduped.forEach((char, i) => {
    if (i === 0) {
      res.push('');
    }
    res.forEach(set => {
      res.push(set + char);
    });
  });
  return res.sort();
};

module.exports = powerSets;
