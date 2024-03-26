// First Missing Positive
// Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.

// You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

// Example 1:

// Input: nums = [1,2,0]
// Output: 3
// Explanation: The numbers in the range [1,2] are all in the array.
// Example 2:

// Input: nums = [3,4,-1,1]
// Output: 2
// Explanation: 1 is in the array but 2 is missing.
// Example 3:

// Input: nums = [7,8,9,11,12]
// Output: 1
// Explanation: The smallest positive integer 1 is missing.

// Own Way
// const firstMissingPositive = (nums) => {
//   let nums2 = [...new Set(nums.sort((a, b) => a - b))];

//   console.log(nums2)
//   let start = 1;
//   for (let i = 0; i < nums2.length+1; i++) {
//     if (nums2[i] <= 0) continue;
//     else if(nums2[i]!==start) return start
//     start++
//   }
// };

// const firstMissingPositive = (nums) => {
//     nums = [...new Set(nums.sort((a, b) => a - b))];

//     let start = 1;
//     for (let i = 0; i < nums.length+1; i++) {
//       if (nums[i] <= 0) continue;
//       else if(nums[i]!==start) return start
//       start++
//     }
//   };

const firstMissingPositive = (nums) => {
  let i = 0;
  const n = nums.length;

  // Place each positive number at its correct position
  while (i < n) {
    // Ignore non-positive numbers and numbers greater than the array length
    if (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[nums[i] - 1]) {
      // Swap nums[i] with nums[nums[i] - 1]
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    } else {
      i++;
    }
  }

  // Find the first missing positive integer
  for (i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  // If all numbers are present from 1 to n, return n + 1
  return n + 1;
};

let nums = [0, 2, 2, 1, 1];
console.log(firstMissingPositive(nums));
