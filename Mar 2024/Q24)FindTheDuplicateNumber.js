// Find the Duplicate Number
// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3
// Example 3:

// Input: nums = [3,3,3,3,3]
// Output: 3

// const findDuplicate = function (nums) {
//   let map = {};
//   let result=-1
//   for (const iterator of nums) {
//     if(map[iterator]===1){
//         result= iterator
//     }
//     map[iterator]=(map[iterator] || 0)+1
//   }
//   return result
// };

// function findDuplicate(nums) {
//     let low = 1;
//     let high = nums.length - 1;
    
//     while (low < high) {
//         const mid = Math.floor((low + high) / 2);
//         let count = 0;
        
//         // Count the number of elements less than or equal to mid
//         for (const num of nums) {
//             if (num <= mid) {
//                 count++;
//             }
//         }
        
//         // If count exceeds mid, the duplicate is in the lower half; otherwise, it's in the upper half
//         if (count > mid) {
//             high = mid;
//         } else {
//             low = mid + 1;
//         }
//     }
    
//     return low;
// }

function findDuplicate(nums) {
    let tortoise = nums[0];
    let hare = nums[0];
    
    // Phase 1: Find the intersection point of the two pointers
    do {
        tortoise = nums[tortoise];    // Move tortoise one step ahead
        hare = nums[nums[hare]];     // Move hare two steps ahead
    } while (tortoise !== hare);

    // Phase 2: Find the entrance to the cycle
    tortoise = nums[0];
    while (tortoise !== hare) {
        tortoise = nums[tortoise]; // Move tortoise one step ahead
        hare = nums[hare];         // Move hare one step ahead
    }

    return tortoise;
}

// Example usage:
const nums = [1, 3, 4, 2, 2];
console.log(findDuplicate(nums)); // Output: 2

// const findDuplicate = function (nums) {
//     let map = {};
//     let result = -1;
//     for (const num of nums) {
//       if (map[num] === 1) { // If the number is already in the map, it's the duplicate
//           result = num;
//           break; // Exit the loop early since we found the duplicate
//       }
//       map[num] = 1; // Mark the number as seen
//     }
//     return result;
//   };

console.log(findDuplicate([1,3,4,2,2]))