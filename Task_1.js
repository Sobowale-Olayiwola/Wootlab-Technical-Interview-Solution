/**
 * Write a function that takes an array of positive integers.
 * The function should calculate the sum of all even and odd integers
 * and return an array containing the sums.
 * The first index in the returned array should hold the sum of the even integers
 * and the second index should hold the sum of the odd integers
 *
 * TEST CASE
 * array is empty return empty array
 *
 * @param {array} array accepts an array of positive integers
 * @returns {array}  an array consistings of sum of even and odd elements
 */
const getEvenAndOddSums = function (array) {
  if (array.length === 0) return array; // check the test case
  let result = [];
  let sumOfEvenIntegers = 0; // initially store sum of even integers as zero
  let sumOfOddIntegers = 0; // initially store sum of odd integers as zero
  // loop through the elements of the array
  for (let i = 0; i < array.length; i++) {
    // check if element at a specific index is even
    if (array[i] % 2 === 0) {
      sumOfEvenIntegers += array[i];
    } else {
      sumOfOddIntegers += array[i];
    }
  }
  result[0] = sumOfEvenIntegers;
  result[1] = sumOfOddIntegers;
  return result;
};

console.log(getEvenAndOddSums([1, 2, 3, 4, 5, 6, 7, 8])); // outputs [20, 16];
console.log(getEvenAndOddSums([])); // outputs [];
