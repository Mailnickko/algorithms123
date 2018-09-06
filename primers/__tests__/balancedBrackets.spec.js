const expect = require('chai').expect;
const balancedBrackets = require('../balancedBrackets.js');

describe('balancedBrackets', () => {
  let str;
  it('should return `null` if an invalid param is passed', () => {
    str = 37;
    expect(balancedBrackets(str)).to.equal(null);
  });

  it('should return true if brackets are balanced', () => {
    str = '(x + y) - (4)';
    expect(balancedBrackets(str)).to.be.true;
  });

  it('should return false if brackets are NOT balanced', () => {
    str = '[{]}';
    expect(balancedBrackets(str)).to.be.false;
  });
});
