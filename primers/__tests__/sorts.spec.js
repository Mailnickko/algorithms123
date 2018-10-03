const expect = require('chai').expect;
const { bubbleSort } = require('../sorts.js');

const unSorted = [-8, 46, 24, 33, 10, 2, 81, 50];

describe('Bubble sort', () => {
  it('should sort an array', () => {
    const arr = [...unSorted];
    const res = bubbleSort(arr);
    expect(res).eql([...unSorted].sort((a, b) => a - b));
  });
});
