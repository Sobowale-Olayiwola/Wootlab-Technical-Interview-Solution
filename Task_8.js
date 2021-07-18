/**
 * Write a method to count the number of 3s that appear in all the numbers between 0 and n (inclusive). 
 * It should return an object containing the count of the number of 3s that appear
 *  and an array of the numbers that have 3s in them
Example:
Input: 35
Output: { count: 10, numbers: [3, 13, 23, 30, 31, 32, 33, 34, 35] }
*@param {number} number accepts number type
*@returns {array} an array of numbers having 3's between the input nummber and inclusive
 */

const getCountOfthree = function (number) {
  if (number < 3) {
    return {
      count: 0,
      numbers: [],
    };
  }
  let numbers = [];
  let count = 0;
  for (let i = 3; i <= number; i++) {
    // convert i to string to use match method on the string object
    i = i.toString();
    let foundthree = i.match(3);
    if (foundthree) {
      //convert i to integer since we require numbers
      i = parseInt(i, 10);
      numbers.push(i);
      count += 1;
    }
  }
  return {
    count: count,
    numbers: numbers,
  };
};

console.log(getCountOfthree(35)); // output { count: 9, numbers: [ 3, 13, 23, 30, 31, 32, 33, 34, 35  ] }
console.log(getCountOfthree(100)); // { count: 19, numbers: [ 3, 13, 23, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 43, 53, 63, 73, 83, 93 ]}
