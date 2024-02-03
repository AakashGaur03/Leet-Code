// Partition Array for Maximum Sum

// Given an integer array arr, partition the array into (contiguous) subarrays of length at most k. After partitioning, each subarray has their values changed to become the maximum value of that subarray.

// Return the largest sum of the given array after partitioning. Test cases are generated so that the answer fits in a 32-bit integer.

// Example 1:

// Input: arr = [1,15,7,9,2,5,10], k = 3
// Output: 84
// Explanation: arr becomes [15,15,15,9,10,10,10]
// Example 2:

// Input: arr = [1,4,1,5,7,3,6,1,9,9,3], k = 4
// Output: 83
// Example 3:

// Input: arr = [1], k = 1
// Output: 1


// In Example 1 [1,15,7,9,2,5,10] k=3
//               [ 15 ][ 9 ][ 10 ]
 
// In Example 2 [1,4,1,5,7,3,6,1,9,9,3] k=4
//               [  5  ][   7  ][ 9  ]
 

// const maxSumAfterPartitioning = (arr, k)=> {
//     let sum = 0;
//     let n = arr.length;

//     for (let i = 0; i < n; i += k) {
//         let arr2 = arr.slice(i, i + k);
//         let temp = Math.max(...arr2);
//         sum += temp * arr2.length;
//     }

//     return sum;
// };

// arr = [1,4,1,5,7,3,6,1,9,9,3], k = 4
// console.log(maxSumAfterPartitioning(arr,k))




const maxSumAfterPartitioning = (arr, k) => {
    const n = arr.length;
    const maxValues = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        let maxVal = 0;

        for (let j = 1; j <= k && i - j + 1 >= 0; j++) {
            maxVal = Math.max(maxVal, arr[i - j + 1]);
            const prevSum = (i >= j ? maxValues[i - j] : 0);
            maxValues[i] = Math.max(maxValues[i], prevSum + maxVal * j);
        }
    }

    return maxValues[n - 1];};

const arr1 = [1, 15, 7, 9, 2, 5, 10];
const k1 = 3;
console.log(maxSumAfterPartitioning(arr1, k1));




// Done with the help pf CHATGPT