// Count Subarrays Where Max Element Appears at Least K Times
// You are given an integer array nums and a positive integer k.

// Return the number of subarrays where the maximum element of nums appears at least k times in that subarray.

// A subarray is a contiguous sequence of elements within an array.

// Example 1:

// Input: nums = [1,3,2,3,3], k = 2
// Output: 6
// Explanation: The subarrays that contain the element 3 at least 2 times are: [1,3,2,3], [1,3,2,3,3], [3,2,3], [3,2,3,3], [2,3,3] and [3,3].
// Example 2:

// Input: nums = [1,4,2,1], k = 3
// Output: 0
// Explanation: No subarray contains the element 4 at least 3 times.

const countSubarrays = function (nums, k) {
  let max = -1;
  let count=0
  let l=0
  let result=0
  for (const i of nums) max = Math.max(max, i);
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]===max) count++

        while(count>=k){
            if(nums[l]===max) count--
            l++
        }
        result+=l
    }

    return result
};

let nums = [1, 3, 2, 3, 3];
let k = 2;
// let nums = [1,4,2,1]
// let k = 3
console.log(countSubarrays(nums, k));
