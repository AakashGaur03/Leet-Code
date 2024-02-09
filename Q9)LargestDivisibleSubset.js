// 368. Largest Divisible Subset
// Given a set of distinct positive integers nums, return the largest subset answer such that every pair (answer[i], answer[j]) of elements in this subset satisfies:

// answer[i] % answer[j] == 0, or
// answer[j] % answer[i] == 0
// If there are multiple solutions, return any of them.

// Example 1:
// Input: nums = [1,2,3]
// Output: [1,2]
// Explanation: [1,3] is also accepted.

// Example 2:
// Input: nums = [1,2,4,8]
// Output: [1,2,4,8]
 

// var largestDivisibleSubset = function(nums) {
//     // console.log(nums.length)
//     let arr=[]
//     for (let i = nums.length-1; i >-1 ; i--) {
//         for (let j = i-1; j > -1; j--) {
//             if(nums[i]%nums[j]===0){
//                 console.log(nums[i],"i")
//                 console.log(nums[j],"j")
//               arr.push(nums[i],nums[j])  
//             }
            
//         }
//     }
//     return arr
// };

// let nums=[1,2,3]
// console.log(largestDivisibleSubset(nums))




// Done with ChatGpt
var largestDivisibleSubset = function(nums) {
    if (nums.length === 0) return [];
    
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const dp = new Array(n).fill(1);
    const prev = new Array(n).fill(-1);
    let maxIndex = 0;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0 && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
                prev[i] = j;
            }
        }
        if (dp[i] > dp[maxIndex]) maxIndex = i;
    }

    const result = [];
    while (maxIndex !== -1) {
        result.unshift(nums[maxIndex]);
        maxIndex = prev[maxIndex];
    }
    
    return result;
};

let nums = [1, 2, 3];
console.log(largestDivisibleSubset(nums)); // Output: [1, 2]
