// 201. Bitwise AND of Numbers Range
// Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.

 

// Example 1:

// Input: left = 5, right = 7
// Output: 4
// Example 2:

// Input: left = 0, right = 0
// Output: 0
// Example 3:

// Input: left = 1, right = 2147483647
// Output: 0



// Chat Gpt Approach
const rangeBitwiseAnd =(left, right)=> {
    let cnt = 0;
while (left !== right) {
    left >>= 1;
    right >>= 1;
    cnt++;
}
return left << cnt;
};





// Iterative Comparison:

// The function starts by comparing the binary representations of left and right integers.
// It keeps comparing them until left and right are equal.
// Counting the Common Prefix:

// While comparing, the function counts how many times it needs to shift both left and right to the right until they become equal.
// Each time we shift to the right, we're essentially dividing the numbers by 2.
// Finding the Bitwise AND:

// After left and right become equal, the function calculates the common prefix they share.
// It then shifts left to the left by the same number of times it previously shifted them to the right.
// Returning the Result:

// The value of left after shifting to the left represents the bitwise AND of the range [left, right].
// This value is returned as the result.
// Let's illustrate this with an example:

// Suppose left = 5 and right = 7.
// Their binary representations are:
// left (5): 101
// right (7): 111
// We start comparing from the rightmost bits:
// 1 (from 5) is not equal to 1 (from 7), so we shift both numbers to the right:
// left becomes 10 (binary 2)
// right becomes 11 (binary 3)
// We repeat this process:
// left becomes 1 (binary 1)
// right becomes 1 (binary 1)
// Now left and right are equal.
// We shift left to the left by the number of times we shifted them to the right, which is twice.
// So, left becomes 100 (binary 4).
// Therefore, the result of the bitwise AND operation on the range [5, 7] is 4.