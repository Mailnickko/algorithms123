const expect = require('chai').expect;
const evenOccurrence = require('../evenOccurrence.js');

describe('evenOccurrence', () => {
  let arr;
  it('should find the first element in array with an even occurrence', () => {
    arr = [1, 3, 3, 3, 2, 4, 4, 2, 5];
    expect(evenOccurrence(arr)).eql(2);
  });

  it('should return `null` if an invalid param is passed', () => {
    expect(evenOccurrence([])).to.equal(null);
    expect(evenOccurrence('nonsense')).to.equal(null);
  });
});
