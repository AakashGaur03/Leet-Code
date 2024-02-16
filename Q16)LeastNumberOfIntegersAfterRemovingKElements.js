// 1481. Least Number of Unique Integers after K Removals
// Given an array of integers arr and an integer k. Find the least number of unique integers after removing exactly k elements.

// Example 1:

// Input: arr = [5,5,4], k = 1
// Output: 1
// Explanation: Remove the single 4, only 5 is left.
// Example 2:
// Input: arr = [4,3,1,1,3,3,2], k = 3
// Output: 2
// Explanation: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 3 will be left.


// Tried By Own Some Test Cases was Not Passing
// const findLeastNumOfUniqueInts = (arr, k) => {
//   const map = {};
//   for (const i of arr) {
//     map[i] = (map[i] || 0) + 1;
//   }
//   const entries = Object.entries(map);
//   entries.sort((a, b) => a[1] - b[1]);
//   console.log(entries)
//   for (let i = 0; i < k; i++) {               
//     const leastFrequent = entries.shift();
//     console.log(leastFrequent[1])
//     k -= leastFrequent[1];
//   }
// console.log(entries)
//   return entries.length;
// };

// let arr = [4,3,1,1,3,3,2]
// let k = 3;
// console.log(findLeastNumOfUniqueInts(arr, k));




// With the help of LeetCode
const findLeastNumOfUniqueInts = (arr, k) => {
  const freqMap = new Map();
  arr.forEach(num => {
      freqMap.set(num, (freqMap.get(num) || 0) + 1);
  });

  const sortedFreq = Array.from(freqMap.entries()).sort((a, b) => a[1] - b[1]);

  for (let [num, freq] of sortedFreq) {
      if (k >= freq) {
          k -= freq;
          freqMap.delete(num);
      } else {
          break;
      }
  }
  return freqMap.size;
};

let arr = [2,4,1,8,3,5,1,3]
let k = 3;
console.log(findLeastNumOfUniqueInts(arr, k));