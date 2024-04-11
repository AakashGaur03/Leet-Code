// 402. Remove K Digits
// Medium
// Topics
// Companies
// Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.

 

// Example 1:

// Input: num = "1432219", k = 3
// Output: "1219"
// Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
// Example 2:

// Input: num = "10200", k = 1
// Output: "200"
// Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
// Example 3:

// Input: num = "10", k = 2
// Output: "0"
// Explanation: Remove all the digits from the number and it is left with nothing which is 0.


var removeKdigits = function (num, k) {
    if (num.length == k) return '0'
    let arr = num.split('')
    let res = []

    for (let i = 0; i < arr.length; i++) {
        while (k > 0 && res.length > 0 && res[res.length - 1] > arr[i]) {
            res.pop()
            k--
        }
        res.push(arr[i])
    }

    while (k > 0) {
        res.pop()
        k--
    }

    let answer = res.join('').replace(/^0+/, '')
    return answer == '' ? '0' : answer
};

num = "1432219", k = 3
console.log(removeKdigits(num, k))