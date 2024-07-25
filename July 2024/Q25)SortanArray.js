// Sort an Array
// Solved
// Medium
// Topics
// Companies
// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.



// Example 1:

// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
// Example 2:

// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessairly unique.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {

    if (nums.length <= 1) return nums;

    const middle = Math.floor(nums.length / 2);
    const left = nums.slice(0, middle);
    const right = nums.slice(middle);

    return mergeSort(sortArray(left), sortArray(right));

};

function mergeSort(left, right) {
    let res = [], l = 0, r = 0;

    while (l < left.length && r < right.length) {

        if (left[l] < right[r]) {
            res.push(left[l]);
            l++;
        } else {
            res.push(right[r]);
            r++;
        }
    }
    while (l < left.length) {
        res.push(left[l]);
        l++;
    }
    while (r < right.length) {
        res.push(right[r]);
        r++;
    }

    return res;

}


nums = [5, 2, 3, 1]
// nums = [5,1,1,2,0,0]
console.log(sortArray(nums))
