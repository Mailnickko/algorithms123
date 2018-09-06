const expect = require('chai').expect;
const commonChars = require('../commonChars.js');

describe('commonChars', () => {
  let str1;
  let str2;
  it('should return null if either param is not a string', () => {
    str1 = 'test';
    str2 = 1;
    expect(commonChars(str1, str2)).to.equal(null);
  });

  it('should find all common chars in both strings', () => {
    str1 = 'abc';
    str2 = 'abc';
    expect(commonChars(str1, str2)).eql('abc');

    str1 = 'Riding on a buffalo makes me more approachable';
    str2 = 'so what';
    expect(commonChars(str1, str2)).eql('oash');
  });
});
