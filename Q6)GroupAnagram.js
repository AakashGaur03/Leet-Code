// 49. Group Anagrams

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Own Method + Help Working Properly
// const groupAnagrams = (strs) => {
//   const sortedArray = strs.map((word) => word.split("").sort().join(""));

//   let result = [];

//   for (let i = 0; i < sortedArray.length; i++) {
//     if (sortedArray[i] !== null) {
//       let currentGroup = [strs[i]];
//       for (let j = i + 1; j < sortedArray.length; j++) {
//         if (sortedArray[i] === sortedArray[j]) {
//           currentGroup.push(strs[j]);
//           sortedArray[j] = null;
//         }
//       }
//       result.push(currentGroup);
//     }
//   }
//   if (result.length) {
//     return result;
//   } else {
//     return [[""]];
//   }
// };

// strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// strs = [""];
// strs = ["",""];
// console.log(groupAnagrams(strs));



// With Help of ChatGpt But understood
const groupAnagrams = (strs) => {
  let anagramsMap = new Map();
  for (let word of strs) {
    const sortedWord = word.split("").sort().join("");
    if (anagramsMap.has(sortedWord)) {
      anagramsMap.get(sortedWord).push(word);
    } else {
      anagramsMap.set(sortedWord, [word]);
    }
  }

  return Array.from(anagramsMap.values());
};

  strs = ["",""];
// strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

groupAnagrams(strs);
console.log(groupAnagrams(strs));
