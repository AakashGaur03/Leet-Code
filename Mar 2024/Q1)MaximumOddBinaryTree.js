// 2864. Maximum Odd Binary Number
// You are given a binary string s that contains at least one '1'.

// You have to rearrange the bits in such a way that the resulting binary number is the maximum odd binary number that can be created from this combination.

// Return a string representing the maximum odd binary number that can be created from the given combination.

// Note that the resulting string can have leading zeros.

// Example 1:

// Input: s = "010"
// Output: "001"
// Explanation: Because there is just one '1', it must be in the last position. So the answer is "001".
// Example 2:

// Input: s = "0101"
// Output: "1001"
// Explanation: One of the '1's must be in the last position. The maximum number that can be made with the remaining digits is "100". So the answer is "1001".


// Self Approach Not Working Properly 
// var maximumOddBinaryNumber = function (s) {
//   console.log(s);
//   const map = {};
//   let count=0;

//   for (const iterator of s) {
//     map[iterator] = (map[iterator] || 0) + 1;
//     if (iterator === "1") count++;
//   }

  
// // Set the last character to '1'
// s[s.length - 1] = '1';
// count--

//   for (let i = s.length - 1; i >= 0; i--) {
//     if (count > 0 && s[i] === '0') {
//         s[i] = '1';
//         count--;
//     }
// }

// console.log(s)

// };

let s = "11000";
console.log(maximumOddBinaryNumber(s));




var maximumOddBinaryNumber = function(s) {
    // Sort the string in descending order
    const sortedChars = s.split("").sort().reverse();

    // If the first character is already '1', move it to the end
    if (sortedChars[0] === "1") {
        // Create a new array excluding the first character and appending "1"
        const modifiedChars = sortedChars.slice(1).concat("1");
        return modifiedChars.join(""); // Combine characters back into a string
    } else {
        return sortedChars.join(""); // Simply return the sorted string
    }
};


var maximumOddBinaryNumber = function(s) {
    let cnt1 = 0, cnt0 = 0;
    for (let a of s) {
        if (a === '1') cnt1++;
        else if (a === '0') cnt0++;
    }
    let ans = '1'.repeat(cnt1 - 1) + '0'.repeat(cnt0) + '1';
    return ans;
};