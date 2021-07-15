/**
 * Write a function that takes a string and determines if the string is a palindrome.
 *  A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward,
 *  such as madam, racecar. The function should return “Yes” if the word is a palindrome and “No” if it isn’t.
 * You are not to use the programming language’s existing function or method, if any.
 * @param {string} s accepts a
 */

const isPalindrome = function (s) {
  // if is an empty string return "Yes"
  if (s.length === 0) return "Yes";
  let right = 0,
    left = 0;
  // use regular expression to remove special characters and space then convert all letters to lowercase
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  if (s.length % 2 === 0) {
    // Create two pointers to start from the middle of the string depending on
    // if the length is even or odd
    right = s.length / 2;
    left = right + 1;
  } else {
    right = Math.floor(s.length / 2) + 1;
    left = right;
  }
  while (left > 0) {
    // check if the string on both positions on pointers are equal
    if (s[right - 1] === s[left - 1]) {
      right++;
      left--;
    } else {
      return "No";
    }
  }
  return "Yes";
};

console.log(isPalindrome("madam")); // output: Yes
console.log(isPalindrome("racecar")); // output: Yes
console.log(isPalindrome("A man, a plan, a canal: Panama")); // output: Yes
console.log(isPalindrome("adra")); // output: No
