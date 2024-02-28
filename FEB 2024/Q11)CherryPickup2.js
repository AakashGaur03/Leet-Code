// 1463. Cherry Pickup II
// Hard
// Topics
// Companies
// Hint
// You are given a rows x cols matrix grid representing a field of cherries where grid[i][j] represents the number of cherries that you can collect from the (i, j) cell.

// You have two robots that can collect cherries for you:

// Robot #1 is located at the top-left corner (0, 0), and
// Robot #2 is located at the top-right corner (0, cols - 1).
// Return the maximum number of cherries collection using both robots by following the rules below:

// From a cell (i, j), robots can move to cell (i + 1, j - 1), (i + 1, j), or (i + 1, j + 1).
// When any robot passes through a cell, It picks up all cherries, and the cell becomes an empty cell.
// When both robots stay in the same cell, only one takes the cherries.
// Both robots cannot move outside of the grid at any moment.
// Both robots should reach the bottom row in grid.


// Tried to understand from striver
// Copied from Leetcode



var cherryPickup = function(grid) {
    const n = grid.length;
    const m = grid[0].length;

    // Memoization table to store already computed results
    const dp = new Array(n).fill(null).map(() => new Array(m).fill(null).map(() => new Array(m).fill(-1)));

    // Initial call to the DFS function
    return dfs(grid, n, m, 0, 0, m - 1, dp);
};

// Depth-first search function with memoization
function dfs(grid, n, m, r, col1, col2, dp) {
    // Base case: out of bounds
    if (r === n) return 0;

    // If result already computed, return it from memoization table
    if (dp[r][col1][col2] !== -1) return dp[r][col1][col2];

    let maxCherries = 0;
    // Iterate through all possible choices for the two robots
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            const newCol1 = col1 + i;
            const newCol2 = col2 + j;

            // Recurse to next row with updated column positions for both robots
            if (newCol1 >= 0 && newCol1 < m && newCol2 >= 0 && newCol2 < m) {
                maxCherries = Math.max(maxCherries, dfs(grid, n, m, r + 1, newCol1, newCol2, dp));
            }
        }
    }

    // Cherries collected in the current cell
    const currCherry = (col1 === col2) ? grid[r][col1] : grid[r][col1] + grid[r][col2];

    // Memoize the result
    dp[r][col1][col2] = currCherry + maxCherries;
    return dp[r][col1][col2];
}