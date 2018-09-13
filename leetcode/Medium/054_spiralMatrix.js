/*
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

const spiralOrder = matrix => {
  if (!matrix || !matrix.length) {
    return matrix;
  }
  const len = matrix[0].length * matrix.length;
  let res = [];
  while (res.length < len) {
    res = res.concat(matrix.shift());
    if (matrix) {
      res = res.concat(matrix.map(row => row.pop()));
      matrix.reverse().map(row => row.reverse());
    }
  }
  return res;
};
