const expect = require('chai').expect;
const { bubbleSort, selectionSort, insertionSort, quickSort } = require('../sorts.js');

const unSorted = [-8, 46, 24, 33, 10, 2, 81, 50];

describe('Bubble sort', () => {
  it('should sort an array', () => {
    const arr = [...unSorted];
    const res = bubbleSort(arr);
    expect(res).eql([...unSorted].sort((a, b) => a - b));
  });
});

describe('Selection sort', () => {
  it('should sort an array', () => {
    const arr = [...unSorted];
    const res = selectionSort(arr);
    expect(res).eql([...unSorted].sort((a, b) => a - b));
  });
});

describe('Insertion sort', () => {
  it('should sort an array', () => {
    const arr = [...unSorted];
    const res = insertionSort(arr);
    expect(res).eql([...unSorted].sort((a, b) => a - b));
  });
});

describe('Quick sort', () => {
  it('should sort an array', () => {
    const arr = [...unSorted];
    const res = quickSort(arr);
    expect(res).eql([...unSorted].sort((a, b) => a - b));
  });
});
