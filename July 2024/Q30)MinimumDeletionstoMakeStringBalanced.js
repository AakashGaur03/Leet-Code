// Minimum Deletions to Make String Balanced
// Solved
// Medium
// Topics
// Companies
// Hint
// You are given a string s consisting only of characters 'a' and 'b'​​​​.

// You can delete any number of characters in s to make s balanced. s is balanced if there is no pair of indices (i,j) such that i < j and s[i] = 'b' and s[j]= 'a'.

// Return the minimum number of deletions needed to make s balanced.

 

// Example 1:

// Input: s = "aababbab"
// Output: 2
// Explanation: You can either:
// Delete the characters at 0-indexed positions 2 and 6 ("aababbab" -> "aaabbb"), or
// Delete the characters at 0-indexed positions 3 and 6 ("aababbab" -> "aabbbb").
// Example 2:

// Input: s = "bbaaaaabb"
// Output: 2
// Explanation: The only solution is to delete the first two characters.

/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    a_count_right=0
    for (i=0;i<s.length;i++){
        if (s[i]==="a"){
            a_count_right+=1
        }

    }
    res=s.length
    b_count_left=0
    for (i=0;i<s.length;i++){
        if(s[i]==="a"){
            a_count_right-=1
        }
        res=Math.min(res,a_count_right+b_count_left)
        if(s[i]==="b"){
            b_count_left+=1
        }
        

    }
    return (res)
    
};