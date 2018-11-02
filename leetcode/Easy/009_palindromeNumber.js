/*
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

const isPalindrome = num => {
  const str = num.toString;
  return (
    str ===
    str
      .split('')
      .reverse()
      .join('')
  );
};

// w/o string conversion

const isPalindrome2 = num => {
  if (num < 0) {
    return false;
  }

  if (x < 10) {
    return true;
  }

  if (num % 10 === 0) {
    return false;
  }

  let reversed = 0;
  while (reversed < num) {
    reversed *= 10;
    reversed += num % 10;
    num = Math.trunc(num / 10);
  }

  return reversed === num || Math.trunc(reversed / 10) === num;
};
