// 451. Sort Characters By Frequency
// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.

// Example 1:

// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input: s = "cccaaa"
// Output: "aaaccc"
// Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:

// Input: s = "Aabb"
// Output: "bbAa"
// Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.



// MY APPROACH
// const frequencySort = (s) => {
//   // console.log(s)
//   const map = {};
//   for (const word of s) {
//     if (map[word]) {
//     //   console.log("ss");
//       map[word]++;
//     } else {
//       map[word] = 1;
//     }
//   }
//   const sortedChars = Object.entries(map).sort((a, b) => b[1] - a[1]);
//   let result = '';
//   for (const [char, freq] of sortedChars) {
//     // result += char.repeat(freq);
//     for (let i = 0; i < freq; i++) {
//         result += char;
//       }
//   }

//   return result;
// };


// Chat GPT APPROACH
const frequencySort = (s) => {
  // console.log(s)
  const map = {};
  for (const char of s) {
    map[char] = (map[char] || 0) + 1;
  }
  const sortedChars = Object.entries(map).sort((a, b) => b[1] - a[1]);
  let result = '';
  for (const [char, freq] of sortedChars) {
    result += char.repeat(freq);
  }

  return result;
};

let s = "tree";
s = "Aabbn";
console.log(frequencySort(s));
