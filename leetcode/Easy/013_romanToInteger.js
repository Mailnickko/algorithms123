/*
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

Example 1:

Input: "III"
Output: 3
Example 2:

Input: "IV"
Output: 4
Example 3:

Input: "IX"
Output: 9
Example 4:

Input: "LVIII"
Output: 58
Explanation: C = 100, L = 50, XXX = 30 and III = 3.
Example 5:

Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

const ROMANS = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

const romanToInt = str => {
  return str.split('').reduce((memo, char, i) => {
    if (i === 0) {
      memo += ROMANS[char];
      return memo;
    }
    // compare the curr and the last
    // if curr is larger than last, we have to subtract, ie IX = 9
    if (ROMANS[char] > ROMANS[str[i - 1]]) {
      memo -= 2 * ROMANS[str[i - 1]];
    }
    memo += ROMANS[char];
    return memo;
  }, 0);
};
