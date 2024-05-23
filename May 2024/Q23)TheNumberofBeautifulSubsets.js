// The Number of Beautiful Subsets
// Medium
// Topics
// Companies
// Hint
// You are given an array nums of positive integers and a positive integer k.

// A subset of nums is beautiful if it does not contain two integers with an absolute difference equal to k.

// Return the number of non-empty beautiful subsets of the array nums.

// A subset of nums is an array that can be obtained by deleting some (possibly none) elements from nums. Two subsets are different if and only if the chosen indices to delete are different.

// Example 1:

// Input: nums = [2,4,6], k = 2
// Output: 4
// Explanation: The beautiful subsets of the array nums are: [2], [4], [6], [2, 6].
// It can be proved that there are only 4 beautiful subsets in the array [2,4,6].
// Example 2:

// Input: nums = [1], k = 1
// Output: 1
// Explanation: The beautiful subset of the array nums is [1].
// It can be proved that there is only 1 beautiful subset in the array [1].

var isSafe = function (nums, part, j, k) {
    for (let i = 0; i < part.length; i++) {
        if (Math.abs(nums[j] - part[i]) == k) {
            return false;
        }
    }

    return true;
}
let count = 0;

var beautifulSubsets = function (nums, k) {
    count = 0;
    part = [];

    var subSetArr = function (i) {
        if (i >= nums.length) {
            count++;
            return;
        }
        if (isSafe(nums, part, i, k)) {
            part.push(nums[i]);
            subSetArr(i + 1);
            part.pop();
        }
        subSetArr(i + 1);
    }

    subSetArr(0);
    return count - 1;
};
nums = [1, 2, 3];
k=1;
// nums = [0]
console.log(beautifulSubsets(nums));
