// // 169. Majority Element
// Easy
// Topics
// Companies
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// By own
const majorityElement = (nums) => {
  console.log(nums);
  const map = {};
  for (const i of nums) {
    map[i] = (map[i] || 0) + 1;
    if (map[i] > nums.length / 2) return i;
  }
};

nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));

// map[char] = (map[char] || 0) + 1;
