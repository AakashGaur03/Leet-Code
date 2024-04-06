// 1249. Minimum Remove to Make Valid Parentheses
// Medium
// Topics
// Companies
// Hint
// Given a string s of '(' , ')' and lowercase English characters.

// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

// Formally, a parentheses string is valid if and only if:

// It is the empty string, contains only lowercase characters, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.

// Example 1:

// Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
// Example 2:

// Input: s = "a)b(c)d"
// Output: "ab(c)d"
// Example 3:

// Input: s = "))(("
// Output: ""
// Explanation: An empty string is also valid.

const minRemoveToMakeValid = (s) => {
  const stack = [];
  const chars = s.split("");
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === "(") {
      stack.push(i);
    } else if (chars[i] === ")") {
      if (stack.length > 0) {
        stack.pop();
      } else {
        chars[i] = ""; // Mark ')' for removal
      }
    }
  }
  while (stack.length > 0) chars[stack.pop()] = "";

  return chars.filter((char) => char !== "").join("");
};
// s = "lee(t(c)o)de)"
s = "a)b(c)d";
// s = "))(("
console.log(minRemoveToMakeValid(s));
