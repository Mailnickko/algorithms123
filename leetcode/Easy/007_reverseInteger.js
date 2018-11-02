/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
*/

const reverse = num => {
  const sign = num < 0 ? -1 : 1;
  let reversed = 0;
  num = Math.abs(num);

  while (num) {
    reversed *= 10;
    reversed += num % 10;
    num = Math.trunc(num / 10);
  }

  if (reversed > 2147483647 || reversed < -2147483647) {
    return 0;
  }

  return sign * reversed;
};
