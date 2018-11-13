/*
	Find the prime factorization of a number. 

	Ex. 204 
	 => [2, 2, 3, 17]
*/

const primeFactorization = num => {
  const factors = [];
  let factor = 3;
  let stopVal = Math.trunc(Math.sqrt(num));
  // handle the two's case
  while (num % 2 === 0) {
    num /= 2;
    factors.push(2);
  }

  // handle other multiples
  while (factor <= stopVal) {
    while (num % factor === 0) {
      num /= factor;
      factors.push(factor);
      stopVal = Math.trunc(Math.sqrt(num));
    }
    factor += 2;
  }

  // push in the remaining prime number
  if (num > 1) {
    factors.push(num);
  }
  return factors;
};
