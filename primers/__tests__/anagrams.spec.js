const expect = require('chai').expect;
const anagrams = require('../anagrams.js');

describe('anagrams', () => {
  let str;
  it('should return null if param is not a string', () => {
    str = 1;
    expect(anagrams(str)).to.equal(null);
  });

  it('should return all anagrams of a string', () => {
    str = 'abc';
    expect(anagrams(str)).eql(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
  });
});
