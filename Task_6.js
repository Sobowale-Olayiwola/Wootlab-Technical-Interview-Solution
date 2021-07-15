/**
 * Write a function that takes two parameters, an array and some number. 
 * The function should determine whether any three numbers in the array add up to the number. 
 * If it does, the function should return the numbers as an array. If it doesn’t, the function should return -1.
 Example
 Input: [1, 2, 3, 4, 5, 6], 6
Output: [1, 2, 3]
 */

const getSumOfNumbersInArray = function (array, targetNumber) {
  array.sort((a, b) => a - b); // using arrow function to use in built sort function in ascending order
  let output = [];
  let p2 = array.length - 1;
  let p1 = 0;
  let gottenAnswer = false;
  while (true) {
    if (array[p1] + array[p2] > targetNumber) {
      p2++;
    } else if (array[p1] + array[p2] === targetNumber) {
      let sum = array[p1] + array[p2];
      if (sum + array[p1 + 1] === targetNumber) {
        output = [array[p1], array[p1 + 1], array[p2]];
        break;
      }
    } else if (array[p1] + array[p2] < targetNumber) {
      let sum = array[p1] + array[p2];
      if (sum + array[p1 + 1] < targetNumber) {
        p1++;
      } else if (sum + array[p1 + 1] > targetNumber) {
        p2--;
      } else {
        output = [array[p1], array[p1 + 1], array[p2]];
        break;
      }
    }
  }
};

console.log(getSumOfNumbersInArray([5, 2, 1, 8, 4, 0], 13));
