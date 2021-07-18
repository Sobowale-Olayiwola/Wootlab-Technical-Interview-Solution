/**
 * This challenge asks you to take a string composed of only lowercase letters and space characters,
 * for	 example, “hello world” and replace every consonant in the string with the next consonant in the alphabet.
 * So in the above example, the output should be “jemmo xosmf” and you can see that we left every vowel in place
 * and only changed the consonants.You should notice that the last letter changed was from “d” to “f” and not
 *  from “d” to “e” because “e” is a vowel.
 *
 * @param {string} string accepts a string
 * @returns {string} string that consonants letter are replaced by next consonant letter
 *
 */

// create a hashmap for access of O(1)
const consonants = {
  b: "c",
  c: "d",
  d: "f",
  f: "g",
  g: "h",
  h: "j",
  j: "k",
  k: "l",
  l: "m",
  m: "n",
  n: "p",
  p: "q",
  q: "r",
  r: "s",
  s: "t",
  t: "v",
  v: "w",
  w: "x",
  x: "y",
  y: "z",
  z: "b",
};
const setConsonantsToNextConsonantLetter = function (string) {
  // convert string to lowercase
  string = string.toLowerCase();
  // split string since it returns an array to able to easily update string at particular index
  string = string.split("");
  for (let i = 0; i < string.length; i++) {
    if (consonants[string[i]]) {
      string[i] = consonants[string[i]];
    }
  }
  return string.join("");
};

console.log(setConsonantsToNextConsonantLetter("hello world")); // output: jemmo xosmf
console.log(setConsonantsToNextConsonantLetter("consonants change")); // output: doptopapvt djaphe
console.log(setConsonantsToNextConsonantLetter("Wootlab")); // output: xoovmac
