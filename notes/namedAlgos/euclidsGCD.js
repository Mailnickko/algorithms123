/*
	To find the GCD between two numbers, use Euclid's algorithm. Nums must be nonnegative and both cannot be 0s

	// Pseudocode: 

	GCD(A, B)
		while (b !== 0)
			remainder = A % B (GCD(A, B) === GCD(B, remainder))
			A = B
			B = remainder

		return A
*/

const getGCD = (A, B) => {
  if (!B) {
    return A;
  }
  return getGCD(B, A % B);
};

console.log(getGCD(78, 66)); // expect (6)
