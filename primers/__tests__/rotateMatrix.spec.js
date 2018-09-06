const expect = require('chai').expect;
const rotateMatrix = require('../rotateMatrix.js');

describe('rotateMatrix', () => {
  let matrix;
  it('should return `null` if an invalid param is passed', () => {
    matrix = 'hello';
    expect(rotateMatrix(matrix)).to.equal(null);
  });

  it('should return matrix rotated clockwise for NxN matrix', () => {
    matrix = [[1, 2], [3, 4]];
    expect(rotateMatrix(matrix)).eql([[3, 1], [4, 2]]);
  });

  it('should return matrix rotated clockwise for MxN matrix', () => {
    matrix = [[1, 2], [3, 4], [5, 6], [7, 8]];
    expect(rotateMatrix(matrix)).eql([[7, 5, 3, 1], [8, 6, 4, 2]]);
  });
});
