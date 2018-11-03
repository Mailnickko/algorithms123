/*
Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
*/

const strStr = (haystack, needle) => {
  if (!needle || !needle.length) {
    return 0;
  }

  for (let i = 0; i < haystack.length; i++) {
    let char = haystack[i];
    let haystackSubStr = haystack.substr(i, needle.length);
    if (haystackSubStr.length > needle.length) {
      return false;
    }
    if (char === needle[0] && haystackSubStr === needle) {
      return i;
    }
  }
  return -1;
};
