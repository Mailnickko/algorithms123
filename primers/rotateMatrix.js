/*
	Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.
*/
const rotateMatrix = matrix => {
  if (!Array.isArray(matrix) || matrix.every(row => !Array.isArray(row))) {
    return null;
  }
  const res = [];
  for (let i = matrix.length - 1; i >= 0; i--) {
    matrix[i].forEach((val, index) => {
      res[index] = res[index] || [];
      res[index].push(val);
    });
  }
  return res;
};

module.exports = rotateMatrix;
