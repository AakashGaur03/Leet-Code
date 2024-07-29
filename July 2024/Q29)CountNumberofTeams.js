// Count Number of Teams
// Medium
// Topics
// Companies
// Hint
// There are n soldiers standing in a line. Each soldier is assigned a unique rating value.

// You have to form a team of 3 soldiers amongst them under the following rules:

// Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
// A team is valid if: (rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n).
// Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).



// Example 1:

// Input: rating = [2,5,3,4,1]
// Output: 3
// Explanation: We can form three teams given the conditions. (2,3,4), (5,4,1), (5,3,1). 
// Example 2:

// Input: rating = [2,1,3]
// Output: 0
// Explanation: We can't form any team given the conditions.
// Example 3:

// Input: rating = [1,2,3,4]
// Output: 4


/**
 * @param {number[]} rating
 * @return {number}
 */
// Working But TLE
// var numTeams = function (rating) {
//     let count = 0
//     for (let i = 0; i < rating.length - 2; i++) {
//         for (let j = i + 1; j < rating.length - 1; j++) {
//             for (let k = j + 1; k < rating.length; k++) {
//                 if ((rating[i] < rating[j] && rating[j] < rating[k]) || (rating[i] > rating[j] && rating[j] > rating[k])) {
//                     count++;
//                 }
//             }
//         }
//     }
//     return count;
// };

var numTeams = function (rating) {
    let n = rating.length;
    let count = 0;

    // Traverse each element as the middle element of the team
    for (let j = 0; j < n; j++) {
        let leftSmaller = 0, leftLarger = 0;
        let rightSmaller = 0, rightLarger = 0;

        // Count elements to the left of `rating[j]`
        for (let i = 0; i < j; i++) {
            if (rating[i] < rating[j]) leftSmaller++;
            if (rating[i] > rating[j]) leftLarger++;
        }

        // Count elements to the right of `rating[j]`
        for (let k = j + 1; k < n; k++) {
            if (rating[k] < rating[j]) rightSmaller++;
            if (rating[k] > rating[j]) rightLarger++;
        }

        // Calculate number of valid teams
        count += leftSmaller * rightLarger; // Increasing teams
        count += leftLarger * rightSmaller; // Decreasing teams
    }

    return count;
};

// Example usage:
const rating = [2, 5, 3, 4, 1];
console.log(numTeams(rating)); // Output: 3


rating = [2, 5, 3, 4, 1]
// rating = [2,1,3]
// rating = [1,2,3,4]
console.log(numTeams(rating))