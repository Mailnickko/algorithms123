const expect = require('chai').expect;
const longestRun = require('../longestRun.js');

describe('longestRun', () => {
  let str;
  it('should return `null` if an invalid param is passed', () => {
    str = 26;
    expect(longestRun(str)).to.equal(null);
  });

  it('should return longest run of chars', () => {
    str = 'abbbcc';
    expect(longestRun(str)).eql([1, 3]);
    str = 'mississippi';
    expect(longestRun(str)).eql([2, 3]);
  });

  it('should return [0, 0] if there are no repeating chars', () => {
    str = 'asdfghjk';
    expect(longestRun(str)).eql([0, 0]);
  });
});
