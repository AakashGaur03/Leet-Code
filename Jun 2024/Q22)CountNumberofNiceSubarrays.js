// Count Number of Nice Subarrays
// Medium
// Topics
// Companies
// Hint
// Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.

// Return the number of nice sub-arrays.



// Example 1:

// Input: nums = [1,1,2,1,1], k = 3
// Output: 2
// Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].
// Example 2:

// Input: nums = [2,4,6], k = 1
// Output: 0
// Explanation: There are no odd numbers in the array.
// Example 3:

// Input: nums = [2,2,2,1,2,2,1,2,2,2], k = 2
// Output: 16

// TLE
// var numberOfSubarrays = function (nums, k) {
//     let oddNumberCount = 0
//     let res = 0

//     for (let j = 0; j < nums.length; j++) {
//         let i = 0
//         for (let i=j;i>=0;i--) {
//             if (nums[i] % 2 !== 0) {
//                 oddNumberCount++
//             }
//             if (oddNumberCount == k) res++
//         }
//         oddNumberCount=0
//     }
//     return res

// };
var numberOfSubarrays = function (nums, k) {
    let oddCount = 0;
    let result = 0;
    let prefixCounts = new Map();
    prefixCounts.set(0, 1);

    for (let num of nums) {
        if (num % 2 !== 0) {
            oddCount++;
        }
        if (prefixCounts.has(oddCount - k)) {
            result += prefixCounts.get(oddCount - k);
        }
        prefixCounts.set(oddCount, (prefixCounts.get(oddCount) || 0) + 1);
    }

    return result;
};

// nums = [2, 2, 2, 1, 2, 2, 1, 2, 2, 2], k = 2


nums = [1, 1, 2, 1, 1], k = 3
// nums = [2,4,6], k = 1
console.log(numberOfSubarrays(nums, k))
