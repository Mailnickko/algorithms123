/*
	Write a function that rotates a NxN matrix 90 degrees clockwise.
A matrix, also called a 2-D array, is simply an array of arrays of values.
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
