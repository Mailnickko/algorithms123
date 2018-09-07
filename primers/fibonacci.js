/*
	Find Nth value in Fibonacci sequence
*/

const iterativeFiboNacci = num => {
  const cache = [0, 1];
  for (let i = 2; i <= num; i++) {
    cache.push(cache[i - 2] + cache[i - 1]);
  }
  return cache[num];
};

const recursiveFiboNacci = num => {
  if (num === 0) {
    return 0;
  }
  if (num === 1 || num === 2) {
    return 1;
  }

  return recursiveFiboNacci(num - 2) + recursiveFiboNacci(num - 1);
};

module.exports = {
  iterativeFiboNacci,
  recursiveFiboNacci
};
