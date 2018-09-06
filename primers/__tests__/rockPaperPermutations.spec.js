const expect = require('chai').expect;
const rockPaperPermutation = require('../rockPaperPermutations.js');

describe('rockPaperPermutation', () => {
  let num;
  it('should return `null` if an invalid param is passed', () => {
    num = 'hello';
    expect(rockPaperPermutation(num)).to.equal(null);
  });

  it('should return an empty array if 0 is passed', () => {
    num = 0;
    expect(rockPaperPermutation(num)).eql([]);
  });

  it('should return the expected set of permutations', () => {
    num = 1;
    expect(rockPaperPermutation(num)).eql([['r'], ['p'], ['s']]);

    num = 2;
    expect(rockPaperPermutation(num)).eql([
      ['r', 'r'],
      ['r', 'p'],
      ['r', 's'],
      ['p', 'r'],
      ['p', 'p'],
      ['p', 's'],
      ['s', 'r'],
      ['s', 'p'],
      ['s', 's']
    ]);
  });
});
