// Single Number III
// Medium
// Topics
// Companies
// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

// You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

 

// Example 1:

// Input: nums = [1,2,1,3,2,5]
// Output: [3,5]
// Explanation:  [5, 3] is also a valid answer.
// Example 2:

// Input: nums = [-1,0]
// Output: [-1,0]
// Example 3:

// Input: nums = [0,1]
// Output: [1,0]


var singleNumber = function(nums) {
    let map={}
    result=[]

    for (const char of nums) {
        map[char]=(map[char] || 0)+1
    }
    for (const num in map) {
        if (map[num] === 1) {
            result.push(Number(num));
        }
    }

    return result;
};

nums = [1,2,1,3,2,5]
// nums = [-1,0]
// nums = [0,1]
console.log(singleNumber(nums))