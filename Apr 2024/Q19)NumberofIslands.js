// 200. Number of Islands
// Solved
// Medium
// Topics
// Companies
// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3


/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const m= grid.length,n=grid[0].length
    let lands=0
    const dfs=(r,c)=>{
        if(r<0 || c<0 || r>=m || c>= n || grid[r][c]!=='1') return
        grid[r][c] = 0
        dfs(r+1,c)
        dfs(r-1,c)
        dfs(r,c+1)
        dfs(r,c-1)

    }
    for(let r=0;r<m;r++){
        for(let c=0;c<n;c++){
            if(grid[r][c]=='1'){
                dfs(r,c);
                lands++
            }
        }
    }
    return lands
};