// 930. Binary Subarrays With Sum
// Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.

// A subarray is a contiguous part of the array.

 

// Example 1:

// Input: nums = [1,0,1,0,1], goal = 2
// Output: 4
// Explanation: The 4 subarrays are bolded and underlined below:
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// Example 2:

// Input: nums = [0,0,0,0,0], goal = 0
// Output: 15


var numSubarraysWithSum = function(nums, goal) {
    let count = new Map();
    count.set(0, 1);
    let currSum = 0;
    let totalSubarrays = 0;

    for (let num of nums) {
        currSum += num;
        if (count.has(currSum - goal)) {
            totalSubarrays += count.get(currSum - goal);
        }
        count.set(currSum, (count.get(currSum) || 0) + 1);
    }

    return totalSubarrays;
};