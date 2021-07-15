/**
 * Write a function that takes an array of positive integers and calculates the standard deviation of the numbers.
 * The function should return the standard deviation.
 *
 * Formula used is
 * Standard Deviation = sqrt(squareSumtotalMeanDifference / Number of items)
 * @param {array} array accepts an array of positive integers
 * @returns {number} standard deviation of the array of positive integers
 */

const getStandardDeviation = function (array) {
  let standardDeviation;
  let total = 0;
  // to determine sum total of integers to determine mean
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  // calculating mean by the dividing by total numbers of integers
  let meanValue = total / array.length;
  let squareSumTotalMeanDifference = 0;
  // to determine the sum total of mean difference
  for (let i = 0; i < array.length; i++) {
    squareSumTotalMeanDifference += Math.pow(array[i] - meanValue, 2);
  }
  standardDeviation = Math.sqrt(squareSumTotalMeanDifference / array.length);
  return standardDeviation;
};
console.log(getStandardDeviation([1, 2, 3, 4, 5])); // output: 1.4142135623730951
console.log(getStandardDeviation([50, 30, 20, 40, 90])); //  output: 24.166091947189145
