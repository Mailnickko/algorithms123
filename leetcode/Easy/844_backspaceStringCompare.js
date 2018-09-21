/*
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
*/

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */

const backspaceCompare = (S, T) => {
  let sLen = S.length - 1;
  let tLen = T.length - 1;
  let deleted;

  while (sLen > -1 || tLen > -1) {
    deleted = 0;
    while (S[sLen] === '#' || deleted > 0) {
      if (S[sLen] === '#') {
        deleted++;
      } else {
        deleted--;
      }
      sLen--;
    }

    deleted = 0;

    while (T[tLen] === '#' || deleted > 0) {
      if (T[tLen] === '#') {
        deleted++;
      } else {
        deleted--;
      }
      tLen--;
    }

    if (S[sLen] !== T[tLen]) {
      return false;
    }

    sLen--;
    tLen--;
  }
  return true;
};
