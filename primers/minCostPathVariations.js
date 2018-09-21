/*
    Prompt: Find the path through the matrix that'll result in the greates sum
*/
const matrix = [[1, 3, 5, 8], [4, 2, 1, 7], [4, 3, 2, 3]];

// Fill out matrix first

const makePathMatrix = matrix => {
  let pathMatrix = [];
  matrix.forEach(row => {
    pathMatrix.push([]);
  });
  // Insert first element
  pathMatrix[0][0] = matrix[0][0];

  // Insert columns
  for (let col = 1; col < matrix.length; col++) {
    pathMatrix[col][0] = pathMatrix[col - 1][0] + matrix[col][0];
  }

  // Insert row
  for (let row = 1; row < matrix[0].length; row++) {
    pathMatrix[0][row] = pathMatrix[0][row - 1] + matrix[0][row];
  }

  // Fill out the rest of the matrix
  for (let col = 1; col < matrix.length; col++) {
    for (let row = 1; row < matrix[0].length; row++) {
      pathMatrix[col][row] = Math.max(pathMatrix[col - 1][row], pathMatrix[col][row - 1]) + matrix[col][row];
    }
  }

  return pathMatrix;
};

const maxPath = (matrix, row = matrix[0].length - 1, col = matrix.length - 1) => {
  let pathMatrix = makePathMatrix(matrix);
  let resPath = [];
  resPath.push(matrix[col][row]);

  // While not back at entry point
  while (row >= 0 && col >= 0) {
    let top = col > 0 ? pathMatrix[col - 1][row] : undefined;
    let left = row > 0 ? pathMatrix[col][row - 1] : undefined;

    if (!top && !left) {
      break;
    }

    if (top > left) {
      resPath.push(matrix[col - 1][row]);
      col--;
    } else {
      resPath.push(matrix[col][row - 1]);
      row--;
    }
  }
  return resPath.reverse();
};
