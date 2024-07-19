// Lucky Numbers in a Matrix
// Easy
// Topics
// Companies
// Hint
// Given an m x n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

// A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.



// Example 1:

// Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
// Output: [15]
// Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column.
// Example 2:

// Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
// Output: [12]
// Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.
// Example 3:

// Input: matrix = [[7,8],[1,2]]
// Output: [7]
// Explanation: 7 is the only lucky number since it is the minimum in its row and the maximum in its column.

var luckyNumbers = function (matrix) {
    let luckyNums = [];

    for (let i = 0; i < matrix.length; i++) {
        // Find the minimum element in the row
        let minVal = matrix[i][0];
        let minColIndex = 0;

        for (let j = 1; j < matrix[i].length; j++) {
            if (matrix[i][j] < minVal) {
                minVal = matrix[i][j];
                minColIndex = j;
            }
        }

        // Check if the minimum element in the row is the maximum in its column
        let isMaxInCol = true;
        for (let k = 0; k < matrix.length; k++) {
            if (matrix[k][minColIndex] > minVal) {
                isMaxInCol = false;
                break;
            }
        }

        // If it is, add it to the lucky numbers list
        if (isMaxInCol) {
            luckyNums.push(minVal);
        }
    }

    return luckyNums;
};
matrix = [[3, 7, 8], [9, 11, 13], [15, 16, 17]]

console.log(luckyNumbers(matrix));