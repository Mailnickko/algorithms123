const expect = require('chai').expect;
const fibs = require('../fibonacci.js');
const recursiveFib = fibs.recursiveFiboNacci;
const iterativeFib = fibs.iterativeFiboNacci;

describe('recursiveFib', () => {
  let num;
  it('should return 0 if arg is 0', () => {
    num = 0;
    expect(recursiveFib(num)).to.equal(0);
  });

  it('should return 1 if arg is 1', () => {
    num = 1;
    expect(recursiveFib(num)).to.equal(1);
  });

  it('should return 2 if arg is 2', () => {
    num = 2;
    expect(recursiveFib(num)).to.equal(1);
  });

  it('should return 5 if arg is 5', () => {
    num = 5;
    expect(recursiveFib(num)).to.equal(5);
  });

  it('should return 55 if arg is 10', () => {
    num = 10;
    expect(recursiveFib(num)).to.equal(55);
  });
});

describe('iterativeFib', () => {
  let num;
  it('should return 0 if arg is 0', () => {
    num = 0;
    expect(iterativeFib(num)).to.equal(0);
  });

  it('should return 1 if arg is 1', () => {
    num = 1;
    expect(iterativeFib(num)).to.equal(1);
  });

  it('should return 2 if arg is 2', () => {
    num = 2;
    expect(iterativeFib(num)).to.equal(1);
  });

  it('should return 5 if arg is 5', () => {
    num = 5;
    expect(iterativeFib(num)).to.equal(5);
  });

  it('should return 55 if arg is 10', () => {
    num = 10;
    expect(iterativeFib(num)).to.equal(55);
  });
});
