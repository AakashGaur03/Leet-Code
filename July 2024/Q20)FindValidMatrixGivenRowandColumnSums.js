// Find Valid Matrix Given Row and Column Sums
// Solved
// Medium
// Topics
// Companies
// Hint
// You are given two arrays rowSum and colSum of non-negative integers where rowSum[i] is the sum of the elements in the ith row and colSum[j] is the sum of the elements of the jth column of a 2D matrix. In other words, you do not know the elements of the matrix, but you do know the sums of each row and column.

// Find any matrix of non-negative integers of size rowSum.length x colSum.length that satisfies the rowSum and colSum requirements.

// Return a 2D array representing any matrix that fulfills the requirements. It's guaranteed that at least one matrix that fulfills the requirements exists.

 

// Example 1:

// Input: rowSum = [3,8], colSum = [4,7]
// Output: [[3,0],
//          [1,7]]
// Explanation: 
// 0th row: 3 + 0 = 3 == rowSum[0]
// 1st row: 1 + 7 = 8 == rowSum[1]
// 0th column: 3 + 1 = 4 == colSum[0]
// 1st column: 0 + 7 = 7 == colSum[1]
// The row and column sums match, and all matrix elements are non-negative.
// Another possible matrix is: [[1,2],
//                              [3,5]]
// Example 2:

// Input: rowSum = [5,7,10], colSum = [8,6,8]
// Output: [[0,5,0],
//          [6,1,0],
//          [2,0,8]]
 

/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function(rowSum, colSum) {
    let matrix=[];
    for(i=0;i<rowSum.length;i++){
        matrix.push(Array(colSum.length).fill(0));
    }
    for(i=0;i<rowSum.length;i++){
        matrix[i][0]=rowSum[i];
    }
    let pivot1=0,sum=0;
    for(i=0;i<colSum.length;i++){
        sum=0;
        for(j=0;j<rowSum.length;j++){
            sum+=matrix[j][i];
            if(sum>colSum[i]){
                matrix[j][i]-=(sum-colSum[i]);
                matrix[j][i+1]+=sum-colSum[i];
                sum=colSum[i];
            }
        }
    }
    return matrix;
};
rowSum = [5,7,10], colSum = [8,6,8]
console.log(restoreMatrix(rowSum,colSum));