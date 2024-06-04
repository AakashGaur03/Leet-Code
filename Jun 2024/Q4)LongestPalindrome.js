// Longest Palindrome
// Easy
// Topics
// Companies
// Given a string s which consists of lowercase or uppercase letters, return the length of the longest 
// palindrome
//  that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome.

 

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

var longestPalindrome = function(s) {
    console.log(s)
    let map = {}
    for (const i of s) {
        map[i]=map[i]+1 || 1
    }
    let length = 0;
    let oddCount = 0;
    
    for (const count of Object.values(map)) {
        if (count % 2 === 0) {
            length += count;
        } else {
            length += count - 1;
            oddCount = 1;
        }
    }
    
    return length + oddCount;
};

s = "abccccdd"
// s = "a"

console.log(longestPalindrome(s))