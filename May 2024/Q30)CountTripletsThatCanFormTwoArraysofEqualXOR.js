// Count Triplets That Can Form Two Arrays of Equal XOR
// Solved
// Medium
// Topics
// Companies
// Hint
// Given an array of integers arr.

// We want to select three indices i, j and k where (0 <= i < j <= k < arr.length).

// Let's define a and b as follows:

// a = arr[i] ^ arr[i + 1] ^ ... ^ arr[j - 1]
// b = arr[j] ^ arr[j + 1] ^ ... ^ arr[k]
// Note that ^ denotes the bitwise-xor operation.

// Return the number of triplets (i, j and k) Where a == b.

 

// Example 1:

// Input: arr = [2,3,1,6,7]
// Output: 4
// Explanation: The triplets are (0,1,2), (0,2,2), (2,3,4) and (2,4,4)
// Example 2:

// Input: arr = [1,1,1,1,1]
// Output: 10


/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function(arr) {
    let n = arr.length;
    let prefix = new Array(n + 1).fill(0);
    
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] ^ arr[i];
    }
    
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let k = i + 1; k < n; k++) {
            if (prefix[i] === prefix[k + 1]) {
                count += (k - i);
            }
        }
    }
    
    return count;
};