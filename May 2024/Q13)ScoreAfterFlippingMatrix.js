// Score After Flipping Matrix
// Medium
// Topics
// Companies
// You are given an m x n binary matrix grid.

// A move consists of choosing any row or column and toggling each value in that row or column (i.e., changing all 0's to 1's, and all 1's to 0's).

// Every row of the matrix is interpreted as a binary number, and the score of the matrix is the sum of these numbers.

// Return the highest possible score after making any number of moves (including zero moves).

 

// Example 1:


// Input: grid = [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
// Output: 39
// Explanation: 0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39
// Example 2:

// Input: grid = [[0]]
// Output: 1


// neetcode solution
var matrixScore = function (grid) {
    let rows = grid.length;
    let cols = grid[0].length;
  
    // if msb of any row is 0 we flip
    for (let row = 0; row < rows; row++) {
      if (grid[row][0] == 0) {
        for (let col = 0; col < cols; col++) {
          grid[row][col] = grid[row][col] == 1 ? 0 : 1
        }
      }
    }
  
    for (let col = 0; col < cols; col++) {
      let one_count = 0
      for (let row = 0; row < rows; row++) {
        one_count += grid[row][col]
      } 
      // if 1 count < 0 count we flip
      if (one_count < rows - one_count) {
        for (let row = 0; row < rows; row++) {
          grid[row][col] = grid[row][col] == 1 ? 0 : 1
        }
      }
    }
    let res = 0
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        res += grid[row][col] << cols - col - 1
      }
    }
    return res;
  };