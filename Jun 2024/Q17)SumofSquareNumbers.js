// Sum of Square Numbers
// Medium
// Topics
// Companies
// Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.

// Example 1:

// Input: c = 5
// Output: true
// Explanation: 1 * 1 + 2 * 2 = 5
// Example 2:

// Input: c = 3
// Output: false

// TLE
// var judgeSquareSum = function(c) {
//     if(c==0) return true
//     let i=0
//     let arr=[]
//     while (i*i<=c) {
//         arr.push(i*i)
//         i++
//     }
//     console.log(arr)
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             sum=arr[i]+arr[j]
//             sum2=arr[j]+arr[j]
//             if(sum==c){
//                 return true
//             }
//             if(sum2==c){
//                 return true
//             }
//         }
//     }
//     return false
// };

var judgeSquareSum = function (c) {
  let left = 0;
  let right = Math.floor(Math.sqrt(c));
  while (left <= right) {
    let sum = left * left + right * right;
    if (sum === c) return true;
    else if (sum > c) right--;
    else left++;
  }
  return false;
};

// c = 20
c = 5;
console.log(judgeSquareSum(c));
