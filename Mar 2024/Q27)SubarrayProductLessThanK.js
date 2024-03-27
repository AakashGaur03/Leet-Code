// Subarray Product Less Than K
// Medium
// Topics
// Companies
// Hint
// Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

// Example 1:

// Input: nums = [10,5,2,6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are:
// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
// Example 2:

// Input: nums = [1,2,3], k = 0
// Output: 0

// const numSubarrayProductLessThanK = (nums, k) => {
//   if (k <= 1) return 0;
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let product = 1;
//     for (let j = i; j < nums.length; j++) {
//         product*=nums[j]
//         if(product<k){
//             count++
//         }else break
//     }
//   }
//   return count
// };

const numSubarrayProductLessThanK = (nums, k) => {
  if (k <= 1) return 0;
  let count = 0;
  let left = 0;
  let right = 0;
  let product = 1;
  let n = nums.length;

  while(right<n){
    product*=nums[right]
    while(product>=k) product/=nums[left++]
    count+=1+(right-left)
    right++
  }
  return count
};

let nums = [10, 5, 2, 6];
let k = 100;
// let nums = [1, 2, 3];
// let k = 0;
console.log(numSubarrayProductLessThanK(nums, k));
