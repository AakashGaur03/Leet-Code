// Continuous Subarray Sum
// Medium
// Topics
// Companies
// Given an integer array nums and an integer k, return true if nums has a good subarray or false otherwise.

// A good subarray is a subarray where:

// its length is at least two, and
// the sum of the elements of the subarray is a multiple of k.
// Note that:

// A subarray is a contiguous part of the array.
// An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.

// Example 1:

// Input: nums = [23,2,4,6,7], k = 6
// Output: true
// Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.
// Example 2:

// Input: nums = [23,2,6,4,7], k = 6
// Output: true
// Explanation: [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42.
// 42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer.
// Example 3:

// Input: nums = [23,2,6,4,7], k = 13
// Output: false

// Self Approach TLE 
// var checkSubarraySum = function(nums, k) {
//     // Function to check if the sum of elements is a multiple of k
//     const isMultipleOfK = (sum, k) => {
//         if (k === 0) {
//             return sum === 0;
//         }
//         return sum % k === 0;
//     };

//     // Traverse with two pointers
//     for (let i = 0; i < nums.length; i++) {
//         let sum = 0;
//         for (let j = i; j < nums.length; j++) {
//             sum += nums[j];
//             if (j - i + 1 >= 2 && isMultipleOfK(sum, k)) {
//                 return true;
//             }
//         }
//     }

//     return false;
// };


var checkSubarraySum = function(nums, k) {
    // Map to store remainder and its index
    let remainderMap = new Map();
    remainderMap.set(0, -1);  // To handle subarrays starting from index 0
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        let remainder = k === 0 ? sum : sum % k;
        
        // Adjust for negative remainders
        if (remainder < 0) {
            remainder += k;
        }

        if (remainderMap.has(remainder)) {
            if (i - remainderMap.get(remainder) > 1) {
                return true;
            }
        } else {
            remainderMap.set(remainder, i);
        }
    }

    return false;
};




(nums = [23, 2, 4, 6, 7]), (k = 6);
// nums = [23,2,6,4,7], k = 6
// nums = [23,2,6,4,7], k = 13
console.log(checkSubarraySum(nums, k));