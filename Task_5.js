/**
 * Write a method to replace all spaces in a string with '%20'.
 * Example
 * Input: "Mr John Smith "
 * Output: "Mr%20John%20Smith"
 * @param {string} string accepts a string literal
 * @returns {string} a formatted string by removing spacing and replacing it with %20
 */

const replaceSpace = function (string) {
  const regex = / /g; // using regular expression and setting the global flag to replace all occurrences of a space
  string = string.replace(regex, "%20");
  return string;
};

console.log(replaceSpace("Mr John Smith")); // output Mr%20John%20Smith
console.log(replaceSpace("I am a qualified Wootlab student")); // I%20am%20a%20qualified%20Wootlab%20student
