// Reverse Substrings Between Each Pair of Parentheses
// Medium
// Topics
// Companies
// Hint
// You are given a string s that consists of lower case English letters and brackets.

// Reverse the strings in each pair of matching parentheses, starting from the innermost one.

// Your result should not contain any brackets.



// Example 1:

// Input: s = "(abcd)"
// Output: "dcba"
// Example 2:

// Input: s = "(u(love)i)"
// Output: "iloveu"
// Explanation: The substring "love" is reversed first, then the whole string is reversed.
// Example 3:

// Input: s = "(ed(et(oc))el)"
// Output: "leetcode"
// Explanation: First, we reverse the substring "oc", then "etco", and finally, the whole string.

var reverseParentheses = function (s) {

    if (!s.includes('(')) {
        return s;
    }
    const arr = s.split('')
    let start = 0
    let end = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "(") {
            start = i
        }
        if (arr[i] == ")") {
            end = i
            break
        }
    }
    let temp = [...arr]
    let reverseIT = arr.slice(start + 1, end)
    let reversed = reverseIT.reverse()
    temp.splice(start, end - start + 1, ...reversed)
    let newString = temp.join('')

    return reverseParentheses(newString);

};

// s = "(abcd)"
// s = "(u(love)i)"
s = "(ed(et(oc))el)"
console.log(reverseParentheses(s))