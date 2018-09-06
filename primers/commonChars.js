/*
	Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.

Your function should return the common characters in the same order that they appear in the first argument. Do not return duplicate characters and ignore whitespace in your returned string.

Example: commonCharacters('acexivou', 'aegihobu')

Returns: 'aeiou'
*/

const commonChars = (str1, str2) => {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    return null;
  }
  const set1 = new Set(str1.replace(/\s/g, ''));
  const set2 = new Set(str2.replace(/\s/g, ''));

  return Array.from(set1).reduce((memo, char) => {
    if (set2.has(char)) {
      memo += char;
    }
    return memo;
  }, '');
};

module.exports = commonChars;
