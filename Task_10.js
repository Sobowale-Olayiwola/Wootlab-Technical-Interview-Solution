/**
 * Write a function that takes a string. The function should calculate the character
 * in the string with the most occurrences and return that character and the total
 * occurrence of the character in a map or JSON object. If more than one character has
 * the most occurrence, return those characters and total occurrences of each as an array of maps or JSON objects.
 *  Example
 *  Input: “afhuusnimr443o0sggg”
 *  Output: “g”
 *  @param {string} string accepts a sequence of character
 *  @returns {object} a JSON Object containing the characters with highest number of counts
 */

const getCharWithHighestCount = function (string) {
  // check if an empty string is sent into the function
  if (string.length === 0) return string;
  // use a Map to Object to store string element at each index due to quick lookups
  const charMap = new Map();
  for (let i = 0; i < string.length; i++) {
    //checks if string element exist inside map and update the total amount of time seen
    // map is used due to access time of O(1);
    if (charMap.get(string[i])) {
      let individualCount;
      individualCount = charMap.get(string[i]);
      individualCount++;
      charMap.set(string[i], individualCount);
      // else create a new key value pair of string element
    } else {
      let individualCount = 1;
      charMap.set(string[i], individualCount);
    }
  }
  // JavaScript object to store list/individual elements with highest count and easily convert to JSON
  let objectToJSON = {};
  let highestCount = 1; // value set for number of counts

  //inner function used to  store elements with highest count in objectToJSON
  function setResultMapElements(value, key, map) {
    if (value > highestCount) {
      highestCount = value;
      objectToJSON = {};
      objectToJSON[key] = highestCount;
    } else if (value === highestCount) {
      objectToJSON[key] = highestCount;
    }
  }
  // forEach property on map object to iterate over the element
  charMap.forEach(setResultMapElements);
  // make response a JSON Object
  return JSON.stringify(objectToJSON);
};

console.log(getCharWithHighestCount("afhuusnimr443o0sggg"));
console.log(getCharWithHighestCount("hgjjdgk"));
