// 268. Missing Number
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

// Example 1:

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// Example 2:

// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
// Example 3:

// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.


// Self Approach with Loop
const missingNumber =(nums)=> {
    nums.sort((a,b)=>a-b)
    console.log(nums)
    if(nums[0]!==0) return 0
    for (let i = 0; i < nums.length; i++) {
        if((nums[i]+1)!==nums[i+1]){
            return nums[i]+1
        }
    }
    return nums[nums.length-1]+1
};


// Logic with Help of ChatGpt but easy to understand
const missingNumber2 =(nums)=>{
    let n=nums.length
    const expectedSum = (n*(n+1))/2
    const actualSum = nums.reduce((acc,curr)=>acc+curr,0)
    
    return expectedSum-actualSum
}

nums = [6,4,2,3,5,7,0,1]
console.log(missingNumber(nums))