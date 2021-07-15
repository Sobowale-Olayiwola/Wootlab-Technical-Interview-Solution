/**
 * Write a function that accepts an array of positive integers and returns an
 * array of all prime numbers from the given array. A prime number is a number that is only divisible by 1 and itself.
 *
 *  TEST CASE
 *  if no integer is a prime number return empty array
 * @param {array} array consists of lists of positive integers
 * @returns {array} array consisting of list of prime positive integers
 */

// function from task 2 used as a utility function in determining prime number
const isNumberPrime = function (number) {
  if (number % 2 === 0 || number === 1 || number === 0) {
    return false;
  }
  let divisor = 3;
  while (divisor < number) {
    if (number % divisor === 0) {
      return false;
    }
    divisor += 2;
  }
  return true;
};

const getListOfPrimePositiveIntegers = function (array) {
  let listOfPrimeIntegers = [];
  for (let i = 0; i < array.length; i++) {
    if (isNumberPrime(array[i])) {
      listOfPrimeIntegers.push(array[i]); // append prime number into array of list of Prime integers
    }
  }
  return listOfPrimeIntegers;
};

console.log(getListOfPrimePositiveIntegers([5, 6, 7, 9, 50, 11, 23])); // output [5, 7, 11, 23]
console.log(getListOfPrimePositiveIntegers([0, 1, 14])); // output []
