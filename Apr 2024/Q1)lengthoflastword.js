// 58. Length of Last Word
// Easy
// Topics
// Companies
// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal
// substring
//  consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

const lengthOfLastWord = function (s) {
  s = s.trim();
  str = s.split(" ");
  return str[str.length - 1].length;
};

// Without Inbuilt
const lengthOfLastWordWithoutInbuiilt = (s) => {
  let len = 0;

  let i = s.length - 1;
  while (i >= 0 && s[i] === " ") i--;


  while(i>=0 && s[i]!== " "){
    len++
    i--
  }
  return len
};

s = "   fly me      to   the moon";
console.log(lengthOfLastWord(s));
console.log(lengthOfLastWordWithoutInbuiilt(s));
