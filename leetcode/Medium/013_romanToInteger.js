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
  const res = 0;
  let curr;

  for (let i = 0; i < str.length; i++) {
    curr = str[i];
    if (i > 0 && ROMANS[curr] > ROMANS[str[i - 1]]) {
      res -= 2 * ROMANS[str[i - 1]];
    }
    res += ROMANS[curr];
  }
  return res;
};
