// Path with Maximum Gold
// Solved
// Medium
// Topics
// Companies
// Hint
// In a gold mine grid of size m x n, each cell in this mine has an integer representing the amount of gold in that cell, 0 if it is empty.

// Return the maximum amount of gold you can collect under the conditions:

// Every time you are located in a cell you will collect all the gold in that cell.
// From your position, you can walk one step to the left, right, up, or down.
// You can't visit the same cell more than once.
// Never visit a cell with 0 gold.
// You can start and stop collecting gold from any position in the grid that has some gold.
 

// Example 1:

// Input: grid = [[0,6,0],[5,8,7],[0,9,0]]
// Output: 24
// Explanation:
// [[0,6,0],
//  [5,8,7],
//  [0,9,0]]
// Path to get the maximum gold, 9 -> 8 -> 7.
// Example 2:

// Input: grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]
// Output: 28
// Explanation:
// [[1,0,7],
//  [2,0,6],
//  [3,4,5],
//  [0,3,0],
//  [9,0,20]]
// Path to get the maximum gold, 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7.


var getMaximumGold = function(grid) {
    let count = 0;
    for(let i = 0; i<grid.length; i++){
        for(let j = 0; j<grid[i].length; j++){
            if(grid[i][j]!==0) count = Math.max(count, maxGold(grid, i, j));
        }
    }
    return count;
};


function maxGold(grid, row=0, col=0, count=0){
    if(row>=grid.length || col>=grid[0].length || row<0 || col<0){
        return count;
    }
    else if(grid[row][col] !== 0){
        count += grid[row][col];
        let temp = grid[row][col];
        grid[row][col] = 0;
        let left = maxGold(grid, row-1, col, count);
        let right = maxGold(grid, row+1, col, count);
        let top = maxGold(grid, row, col-1, count);
        let bottom = maxGold(grid, row, col+1, count);
        grid[row][col] = temp;
        return Math.max(left, right, top, bottom);
    }
    else{
        return count;
    }
}