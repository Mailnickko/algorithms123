const expect = require('chai').expect;
const powerSets = require('../powerSets.js');

describe('powerSets', () => {
  let str;
  it('should return `null` if an invalid param is passed', () => {
    str = 26;
    expect(powerSets(str)).to.equal(null);
  });

  it('should return the correct powerset', () => {
    str = 'a';
    expect(powerSets(str)).eql(['', 'a']);

    str = 'ab';
    expect(powerSets(str)).eql(['', 'a', 'ab', 'b']);

    str = 'horse';
    expect(powerSets(str)).eql([
      '',
      'e',
      'eh',
      'eho',
      'ehor',
      'ehors',
      'ehos',
      'ehr',
      'ehrs',
      'ehs',
      'eo',
      'eor',
      'eors',
      'eos',
      'er',
      'ers',
      'es',
      'h',
      'ho',
      'hor',
      'hors',
      'hos',
      'hr',
      'hrs',
      'hs',
      'o',
      'or',
      'ors',
      'os',
      'r',
      'rs',
      's'
    ]);
  });
});
