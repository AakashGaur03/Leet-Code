// Palindrome Partitioning
// Medium
// Topics
// Companies
// Given a string s, partition s such that every 
// substring
//  of the partition is a 
// palindrome
// . Return all possible palindrome partitioning of s.

 

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
// Example 2:

// Input: s = "a"
// Output: [["a"]]


/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let result = [];
    const dfsBacktracking = (s, path, result) => {
        if (s.length == 0){
            result.push(path);
            return;
        }
        for (let i = 1; i <= s.length; i++){
            let partition = s.substring(0, i);
            if (partition.split('').reverse().join('') === partition){
                dfsBacktracking(s.substring(i), [...path, partition], result);
            }
        }
    };
    dfsBacktracking(s, [], result)
    return result;
};