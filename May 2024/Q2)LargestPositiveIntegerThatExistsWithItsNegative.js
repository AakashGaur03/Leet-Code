// 2441. Largest Positive Integer That Exists With Its Negative
// Easy
// Topics
// Companies
// Hint
// Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.

// Return the positive integer k. If there is no such integer, return -1.

 

// Example 1:

// Input: nums = [-1,2,-3,3]
// Output: 3
// Explanation: 3 is the only valid k we can find in the array.
// Example 2:

// Input: nums = [-1,10,6,7,-7,1]
// Output: 7
// Explanation: Both 1 and 7 have their corresponding negative values in the array. 7 has a larger value.
// Example 3:

// Input: nums = [-10,8,6,7,-2,-3]
// Output: -1
// Explanation: There is no a single valid k, we return -1.


var findMaxK = function(nums) {
    let arr=[]
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
        if(nums[i]===-(nums[j]))    {
            arr.push(Math.abs(nums[i]))
        }        
        }
    }
    console.log(arr)
    if(arr.length>0) return Math.abs(Math.max(...arr))
    else return -1
};


nums = [-37,37,-9,2,47,18,13,-11,9,-28]


// nums = [-1,2,-3,3]
// nums = [-9,-43,24,-23,-16,-30,-38,-30]
// nums = [-10,8,6,7,-2,-3]
// nums = [-1,2,-3,3]
// nums = [-1,10,6,7,-7,1]
console.log(findMaxK(nums))



// Uploaded Mine Solution Only
// var findMaxK2 = function(nums) {
//     let res = -1;
//     let numSet = new Set(nums);
//     for (let num of numSet) {
//         if (numSet.has(-num)) {
//             res = Math.max(res, num);
//         }
//     }
//     return res;
// };