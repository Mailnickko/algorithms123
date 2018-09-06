/*
	Implement a function that finds the longest palindrome in a given string. For example, in the string “My dad is a racecar athlete”, the longest palindrome is “a racecar a”. Count whitespaces as valid characters. Other palindromes in the above string include “dad”, “ete”, “ dad “ (including whitespace on each side of dad).
*/

const isPalindrome = word => {
  return (
    word ===
    word
      .split('')
      .reverse()
      .join('')
  );
};

const longestPalindrome = str => {
  if (typeof str !== 'string') {
    return null;
  }
  let longest = '';
  for (let i = 0; i < str.length; i++) {
    for (let j = str.length - 1; j >= 0; j--) {
      if (str[i] === str[j]) {
        var substr = str.slice(i, j + 1);
        if (isPalindrome(substr) && substr.length > longest.length) {
          longest = substr;
        }
      }
    }
  }
  return longest;
};

module.exports = longestPalindrome;
