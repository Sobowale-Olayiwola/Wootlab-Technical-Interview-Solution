/**
 * Create a password validator function that takes in the password as its argument and returns 
 * an integer value you can evaluate to determine the password strength. Using the following validators:
0 -> very weak e.g. a password with only strings
1 -> weak e.g. a password with only numbers
2 -> strong e.g. a password containing strings and numbers
3 -> very strong e.g. a password containing strings, numbers and special characters 
 * @param {string} password accepts a string 
 * @returns {number} number representing password strength
 */

const getPasswordStrength = function (password) {
  // use regular expression to extract string in password and stores it as an array object in strings
  const strings = password.match(/[a-zA-Z]/g);
  // use regular expression to extract numbers in password and stores it as an array object in numbers
  const numbers = password.match(/[0-9]/g);
  // use regular expression to extract specialCharacters in password and stores it as an array object in specialCharacters
  const specialCharacters = password.match(/[^a-zA-Z0-9]/g);

  // In javascript falsy evaluates to false i.e null, undefined, empty strings, 0, NaN, false
  if (strings && numbers && specialCharacters) {
    return 3;
  } else if (strings && numbers && !specialCharacters) {
    return 2;
  } else if (numbers && !strings && !specialCharacters) {
    return 1;
  } else if (strings && !numbers && !specialCharacters) {
    return 0;
  }
};

console.log(getPasswordStrength("Wootlab@2021")); // outputs 3
console.log(getPasswordStrength("wootlab")); // 0
