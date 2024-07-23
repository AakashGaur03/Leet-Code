// Sort Array by Increasing Frequency
// Easy
// Topics
// Companies
// Hint
// Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

// Return the sorted array.



// Example 1:

// Input: nums = [1,1,2,2,2,3]
// Output: [3,1,1,2,2,2]
// Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.
// Example 2:

// Input: nums = [2,3,1,3,2]
// Output: [1,3,3,2,2]
// Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.
// Example 3:

// Input: nums = [-1,1,-6,4,5,-6,1,4,1]
// Output: [5,-1,4,4,-6,-6,1,1,1]

var frequencySort = function (nums) {
    const map = {}
    for (const iterator of nums) {
        map[iterator] = map[iterator] + 1 || 1
    }
    return nums.sort((a, b) => map[a] - map[b] || b - a)
}

// Primary Sort Criterion: map[a] - map[b]
// This compares the frequencies of elements a and b.
// Elements with lower frequencies come first (ascending order of frequency).
// Secondary Sort Criterion: b - a
// If two elements have the same frequency, this sorts them in descending order of their value (higher value comes first).

// nums = [1,1,2,2,2,3]
nums = [2, 3, 1, 3, 2]
// nums = [-1,1,-6,4,5,-6,1,4,1]
console.log(frequencySort(nums))
