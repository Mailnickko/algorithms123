const lengthOfLongestSubstring = s => {
  const win = {};
  let currStart = 0;
  let len = 0;
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (win[char] !== undefined && win[char] >= currStart) {
      currStart = win[char] + 1;
      len = i - currStart;
    }

    len++;
    if (len > maxLen) {
      maxLen = len;
    }

    win[char] = i;
  }
  return maxLen;
};
