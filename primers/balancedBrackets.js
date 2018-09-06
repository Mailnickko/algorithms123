/*
	Given a string, return true if its arrangement of parenthesis (), curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).
*/
const balancedBrackets = str => {
  if (typeof str !== 'string') {
    return null;
  }
  var opener = { '{': '}', '[': ']', '(': ')' };
  var closer = { '}': true, ']': true, ')': true };
  const memo = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (opener[char]) {
      memo.push(char);
    } else if (closer[char]) {
      if (opener[memo.pop()] !== char) {
        return false;
      }
    }
  }
  return memo.length === 0;
};

module.exports = balancedBrackets;
