const isValid = str => {
  if (!str || !str.length) {
    return true;
  }

  if (str.length % 2) {
    return false;
  }

  const cache = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  const memo = [];

  for (let i = 0; i < str.length; i++) {
    if (cache[str[i]]) {
      memo.push(cache[str[i]]);
    } else {
      if (str[i] !== memo.pop()) {
        return false;
      }
    }
  }

  return memo.length === 0;
};
