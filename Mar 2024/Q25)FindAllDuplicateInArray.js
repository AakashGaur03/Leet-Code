// Find All Duplicates in an Array
// Medium
// Topics
// Companies
// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1,2]
// Output: [1]
// Example 3:

// Input: nums = [1]
// Output: []

// const findDuplicates = (nums) => {
//   let map = {};
//     const result = []
//   for (const iterator of nums) {
//     if(map[iterator]===1){
//         result.push(iterator)
//     }
//     map[iterator]=(map[iterator] || 0)+1
//   }
//   return result
// };

// let nums = [4, 3, 2, 7, 8, 2, 3, 1];
// console.log(findDuplicates(nums));

const findDuplicates = (nums) => {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
      const index = Math.abs(nums[i]) - 1;
      if (nums[index] < 0) {
          result.push(index + 1);
      } else {
          nums[index] *= -1;
      }
  }

  return result;
};

let nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDuplicates(nums));




  // Given the input array nums = [4, 3, 2, 7, 8, 2, 3, 1]:

  // At the first iteration, the current element is 4. We calculate the index as 4 - 1 = 3. Since nums[3] is positive, we negate it to mark it as visited.
  // At the second iteration, the current element is 3. We calculate the index as 3 - 1 = 2. Since nums[2] is positive, we negate it.
  // At the third iteration, the current element is 2. We calculate the index as 2 - 1 = 1. Since nums[1] is positive, we negate it.
  // At the fourth iteration, the current element is 7. We calculate the index as 7 - 1 = 6. Since nums[6] is positive, we negate it.
  // At the fifth iteration, the current element is 8. We calculate the index as 8 - 1 = 7. Since nums[7] is positive, we negate it.
  // At the sixth iteration, the current element is 2. We calculate the index as 2 - 1 = 1. Since nums[1] is negative, it means we've encountered this number before. So, we add it to the result array.
  // At the seventh iteration, the current element is 3. We calculate the index as 3 - 1 = 2. Since nums[2] is negative, it means we've encountered this number before. So, we add it to the result array.
  // At the eighth iteration, the current element is 1. We calculate the index as 1 - 1 = 0. Since nums[0] is positive, we negate it.