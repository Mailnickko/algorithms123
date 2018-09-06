const expect = require('chai').expect;
const binarySearchArray = require('../binarySearchArray.js');

describe('binarySearchArray', () => {
  let arr;
  let target;
  it('should return `null` if an invalid param is passed', () => {
    arr = 37;
    target = 2;
    expect(binarySearchArray(arr, target)).to.equal(null);
  });

  it('should return `null` if an array is valid but target is not', () => {
    arr = [1, 2, 3, 4, 5];
    target = 'tacos';
    expect(binarySearchArray(arr, target)).to.equal(null);
  });

  it('should return -1 if target does not exist in array', () => {
    arr = [1, 2, 3, 4, 5];
    target = 62;
    expect(binarySearchArray(arr, target)).to.equal(-1);
  });

  it('should return the index of the target in the array', () => {
    arr = [1, 2, 3, 4, 5];
    target = 4;
    expect(binarySearchArray(arr, target)).to.equal(3);
  });
});
