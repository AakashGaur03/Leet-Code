// 350. Intersection of Two Arrays II
// Easy
// Topics
// Companies
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.



// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.


var intersect = function (nums1, nums2) {
    let nums1Length = nums1.length;
    let nums2Length = nums2.length;
    let smap = {}
    let nums = []
    if (nums1Length <= nums2Length) {
        for (const iterator of nums2) {
            smap[iterator] = smap[iterator] + 1 || 1
        }
        nums = nums1
    } else {
        for (const iterator of nums1) {
            smap[iterator] = smap[iterator] + 1 || 1
        }
        nums = nums2
    }

    let result = [];
    for (const iterator of nums) {
        if (smap[iterator] > 0) {
            result.push(iterator)
            smap[iterator] = smap[iterator] - 1
        }
    }
    return result
};

// nums1 = [1, 2, 2, 1], nums2 = [2, 2]
nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]

console.log(intersect(nums1, nums2))