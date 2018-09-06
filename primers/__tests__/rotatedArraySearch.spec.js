const expect = require('chai').expect;
const rotatedArraySearch = require('../rotatedArraySearch.js');

describe('rotatedArraySearch', () => {
  let arr;
  let target;
  it('should return `null` if an invalid array is passed', () => {
    arr = 37;
    target = 3;
    expect(rotatedArraySearch(arr, target)).to.equal(null);
  });

  it('should return `null` if a valid array is passed, but the target is not', () => {
    arr = [1, 2, 3, 4];
    target = 'hello';
    expect(rotatedArraySearch(arr, target)).to.equal(null);
  });

  it('should return the index of the target if it exists in array', () => {
    arr = [4, 5, 6, 0, 1, 2, 3];
    target = 5;
    expect(rotatedArraySearch(arr, target)).to.equal(1);
  });

  it('should return -1 if the target is not in the array', () => {
    arr = [4, 5, 6, 0, 1, 2, 3];
    target = 78;
    expect(rotatedArraySearch(arr, target)).to.equal(-1);
  });
});
