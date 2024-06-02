// Reverse String
// Easy
// Topics
// Companies
// Hint
// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

var reverseString = function (s) {
  // return s.reverse()

//   we have to do inplace thats why it will not work it is automatically returning s
//   let arr = [];
//   for (let i = s.length - 1; i >= 0; i--) {
//     arr.push(s[i]);
//   }
//   return arr;
// let n = s.length;
// for (let i = 0; i < n/2; i++) {
//     let temp=s[i]
//     s[i]=s[n-i-1]
//     s[n-i-1]=temp    
// }
let left=0
let right=s.length-1

while(left<right){
    let temp = s[left]
    s[left]=s[right]
    s[right]=temp
    left++
    right--
}
return s

};

s = ["h", "e", "l", "l", "o","j"];
// s = ["H","a","n","n","a","h"]
console.log(reverseString(s));
