// Sort Colors
// Medium
// Topics
// Companies
// Hint
// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

 

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]


// var sortColors = function(nums) {
//     console.log(nums)
//     let map={}
//     for (const iterator of nums) {
//         map[iterator]=map[iterator]+1 || 1
//     }
//     console.log(map)
//     let index = 0;
//     for (const [color, count] of Object.entries(map)) {
//         console.log(`Color: ${color}, Count: ${count}`);
//         for (let i = 0; i < count; i++) {
//             nums[index++] = parseInt(color); // Convert color back to number
//         }
//     }
//     console.log(nums)
// };


// Optimized Approach
var sortColors = function(nums) {
    let isSorted = false;
    while(!isSorted){
        isSorted = true;
        for(let i = 0; i < nums.length - 1; i++){
            if(nums[i] > nums[i + 1]){
                isSorted = false;
                [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
            }
        }
    }
};


nums = [2,0,2,1,1,0]
// nums = [2,0,1]
console.log(sortColors(nums))