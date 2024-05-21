// Subsets
// Medium
// Topics
// Companies
// Given an integer array nums of unique elements, return all possible 
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]


var subsets = function(nums) {
    let result = [[]];

    for (let num of nums) {
        let newSubsets = [];
        for (let subset of result) {
            newSubsets.push([...subset, num]);
        }
        result = result.concat(newSubsets);
    }

    return result;
};

nums = [1, 2, 3];
// nums = [0]
console.log(subsets(nums));
