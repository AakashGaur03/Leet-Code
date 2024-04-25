// Longest Ideal Subsequence
// Solved
// Medium
// Topics
// Companies
// Hint
// You are given a string s consisting of lowercase letters and an integer k. We call a string t ideal if the following conditions are satisfied:

// t is a subsequence of the string s.
// The absolute difference in the alphabet order of every two adjacent letters in t is less than or equal to k.
// Return the length of the longest ideal string.

// A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.

// Note that the alphabet order is not cyclic. For example, the absolute difference in the alphabet order of 'a' and 'z' is 25, not 1.

 

// Example 1:

// Input: s = "acfgbd", k = 2
// Output: 4
// Explanation: The longest ideal string is "acbd". The length of this string is 4, so 4 is returned.
// Note that "acfgbd" is not ideal because 'c' and 'f' have a difference of 3 in alphabet order.
// Example 2:

// Input: s = "abcd", k = 3
// Output: 4
// Explanation: The longest ideal string is "abcd". The length of this string is 4, so 4 is returned.


var longestIdealString = function(s, k) {
    let dp = new Array(27).fill(0);
    let n = s.length;

    for (let i = n - 1; i >= 0; i--) {
        let cc = s.charAt(i);
        let idx = cc.charCodeAt(0) - 'a'.charCodeAt(0);
        let maxi = Number.MIN_SAFE_INTEGER;

        let left = Math.max((idx - k), 0);
        let right = Math.min((idx + k), 26);

        for (let j = left; j <= right; j++) {
            maxi = Math.max(maxi, dp[j]);
        }

        dp[idx] = maxi + 1;
    }

    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < 27; i++) {
        if (dp[i] > max)
            max = dp[i];
    }

    return max;
};