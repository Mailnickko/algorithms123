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

// Mutates original matrix;
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

// more verbose but preserves matrix input
const spiralTraverse = matrix => {
  if (!matrix || !matrix.length) {
    return matrix;
  }
  let rows = matrix.length;
  let cols = matrix[0].length;
  let top = 0;
  let bottom = rows - 1;
  let left = 0;
  let right = cols - 1;
  let dir = 0; // 0=>top, 1=>bottom, 2=>left, 3=> right

  const res = [];

  while (top <= bottom && left <= right) {
    if (dir === 0) {
      for (let i = left; i <= right; i++) {
        res.push(matrix[top][i]);
      }
      top++;
      dir++;
    } else if (dir === 1) {
      for (let i = top; i <= bottom; i++) {
        res.push(matrix[i][right]);
      }
      right--;
      dir++;
    } else if (dir === 2) {
      for (let i = right; i >= left; i--) {
        res.push(matrix[bottom][i]);
      }
      bottom--;
      dir++;
    } else {
      for (let i = bottom; i >= top; i--) {
        res.push(matrix[i][left]);
      }
      left++;
      dir = 0;
    }
  }
  return res;
};
