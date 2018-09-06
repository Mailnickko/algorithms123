const expect = require('chai').expect;
const longestPalindrome = require('../longestPalindrome.js');

describe('longestPalindrome', () => {
  let str;
  it('should return null if either param is not a string', () => {
    str = 1;
    expect(longestPalindrome(str)).to.equal(null);
  });

  it('should the longest palindrome in a string', () => {
    str = 'My dad is a racecar athlete';
    expect(longestPalindrome(str)).to.equal('a racecar a');

    str = 'aibohphobia';
    expect(longestPalindrome(str)).to.equal(str);
  });
});
