/*
	Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. If there are two runs of equal length, return the first one. Return [0,0] for no runs.
*/
const longestRun = str => {
  if (typeof str !== 'string') {
    return null;
  }
  let longest = [0, 0];
  let current = [0, 0];

  str.split('').forEach((char, i) => {
    if (i > 0) {
      if (char === str[i - 1]) {
        current[1] = i;
        if (current[1] - current[0] > longest[1] - longest[0]) {
          longest = current;
        }
      } else {
        current = [i, i];
      }
    }
  });
  return longest;
};

module.exports = longestRun;
