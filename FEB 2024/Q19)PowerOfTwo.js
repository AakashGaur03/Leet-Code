// 231. Power of Two
// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

// Example 1:

// Input: n = 1
// Output: true
// Explanation: 20 = 1
// Example 2:

// Input: n = 16
// Output: true
// Explanation: 24 = 16
// Example 3:

// Input: n = 3
// Output: false



// Self Approach Submitted on Leetcode
const isPowerOfTwo = (n) => {
  console.log(n);
  //   let res=false
  while (n > 1) {
    if (n % 2 !== 0) return false;
    n = n / 2;
  }
  if (n === 1) return true;
  return false;
};



// 1) Without Loop using Bitwise Operator
// const isPowerOfTwo =(n)=> {
//     return n > 0 && (n & (n-1)) === 0
// };






// Explanation
// n > 0: This condition checks if the number n is positive. Any negative number or zero cannot be a power of two.

// (n & (n-1)) === 0: This part is a bitwise operation that checks if there is only one bit set to 1 in the binary representation of n.

// (n-1) operation turns off the rightmost set bit in n and turns on all the lower bits. For example, if n is 4 (which is 100 in binary), (n-1) would be 3 (which is 011 in binary).

// Bitwise AND (&) operation between n and (n-1) would result in 0 if n is a power of two and greater than zero. This is because in binary, a power of two only has one bit set to 1, and when you subtract 1 from it, all bits after the rightmost 1 turn to 1. Therefore, when you perform bitwise AND, it results in 0.

// For example:

// If n is 4 (100 in binary), (n-1) is 3 (011 in binary). When you perform a bitwise AND operation, you get 0.
// If n is 8 (1000 in binary), (n-1) is 7 (0111 in binary). When you perform a bitwise AND operation, you get 0.
// If n is 5 (101 in binary), (n-1) is 4 (100 in binary). When you perform a bitwise AND operation, you get 4, which is not equal to 0, indicating that 5 is not a power of two.
// Finally, the function returns true if both conditions are met, indicating that the number is a power of two, and false otherwise.



// 2) Without Loop using Log




// const isPowerOfTwo = (n) => {
//     if (n <= 0) return false;
//     return Math.log2(n) % 1 === 0;
// };



// Explanation:

// The function first checks if the input number n is less than or equal to 0. If it is, it immediately returns false since negative numbers and 0 cannot be powers of two.
// Then, it calculates the base-2 logarithm of the number using Math.log2(n).
// Finally, it checks if the result of the logarithm operation is an integer. This is done by checking if the remainder of dividing the result by 1 is equal to 0. If it is, it means that the logarithm result is a whole number, indicating that n is a power of two, and the function returns true. Otherwise, it returns false



let n = 6;
console.log(isPowerOfTwo(n));

