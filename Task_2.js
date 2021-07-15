/**
 * Write a function that accepts a positive integer and determines if it is a prime number.
 * The function should return true if it is a prime number or false if it isn’t.
 *
 *  @param {number} number accepts a positive integer as input
 * @returns {boolean} true or false
 */

const isNumberPrime = function (number) {
  if (number % 2 === 0 || number === 1 || number === 0) {
    // quick check  for even numbers, 1 and zero
    return false;
  }
  // if integer is not even then make divisor start by 3 and increment it by 2, if the number can be divisible
  // by 2 or multiples of 2 such as 4, 6, 8 e.t.c then it isn't a prime number
  let divisor = 3;
  while (divisor < number) {
    if (number % divisor === 0) {
      return false;
    }
    divisor += 2;
  }
  return true;
};

console.log(isNumberPrime(57)); // false
console.log(isNumberPrime(59)); // true
