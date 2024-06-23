// Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit
// Medium
// Topics
// Companies
// Hint
// Given an array of integers nums and an integer limit, return the size of the longest non-empty subarray such that the absolute difference between any two elements of this subarray is less than or equal to limit.

 

// Example 1:

// Input: nums = [8,2,4,7], limit = 4
// Output: 2 
// Explanation: All subarrays are: 
// [8] with maximum absolute diff |8-8| = 0 <= 4. -------------------
// [8,2] with maximum absolute diff |8-2| = 6 > 4. 
// [8,2,4] with maximum absolute diff |8-2| = 6 > 4.
// [8,2,4,7] with maximum absolute diff |8-2| = 6 > 4.
// [2] with maximum absolute diff |2-2| = 0 <= 4.
// [2,4] with maximum absolute diff |2-4| = 2 <= 4. ------------------
// [2,4,7] with maximum absolute diff |2-7| = 5 > 4.
// [4] with maximum absolute diff |4-4| = 0 <= 4.
// [4,7] with maximum absolute diff |4-7| = 3 <= 4. ----------------
// [7] with maximum absolute diff |7-7| = 0 <= 4.  -----------------
// Therefore, the size of the longest subarray is 2.
// Example 2:

// Input: nums = [10,1,2,4,7,2], limit = 5
// Output: 4 
// Explanation: The subarray [2,4,7,2] is the longest since the maximum absolute diff is |2-7| = 5 <= 5.
// Example 3:

// Input: nums = [4,2,2,2,4,4,2,2], limit = 0
// Output: 3


var longestSubarray = function(nums, limit) {
    let increase = [];
    let decrease = [];
    let max = 0;
    let left = 0;
    
    for (let i = 0; i < nums.length; i++) {
        while (increase.length && nums[i] < increase[increase.length - 1]) {
            increase.pop();
        }
        increase.push(nums[i]);
        
        while (decrease.length && nums[i] > decrease[decrease.length - 1]) {
            decrease.pop();
        }
        decrease.push(nums[i]);
        
        while (decrease[0] - increase[0] > limit) {
            if (nums[left] === decrease[0]) {
                decrease.shift();
            }
            if (nums[left] === increase[0]) {
                increase.shift();
            }
            left++;
        }
        
        max = Math.max(max, i - left + 1);
    }
    
    return max;
};