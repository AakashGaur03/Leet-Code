// Subarrays with K Different Integers
// Solved
// Hard
// Topics
// Companies
// Given an integer array nums and an integer k, return the number of good subarrays of nums.

// A good array is an array where the number of different integers in that array is exactly k.

// For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.
// A subarray is a contiguous part of an array.

 

// Example 1:

// Input: nums = [1,2,1,2,3], k = 2
// Output: 7
// Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]
// Example 2:

// Input: nums = [1,2,1,3,4], k = 3
// Output: 3
// Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].


var subarraysWithKDistinct = function(nums, k) {
    
    const atMost = (nums, k) => {
        let total = 0;
        let left = 0;
        let count = new Array(nums.length + 1).fill(0);
        let distinct = 0;

        for(let right = 0; right < nums.length; right++) {
            if(count[nums[right]] === 0) distinct++;
            count[nums[right]]++;

            while(distinct > k) {
                count[nums[left]]--;
                if(count[nums[left]] === 0) distinct--;
                left++;
            }

            total += right - left +1
        }

        return total;
    }

    return atMost(nums, k) - atMost(nums, k - 1);
};