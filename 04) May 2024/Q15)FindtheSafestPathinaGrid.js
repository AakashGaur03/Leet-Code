// Find the Safest Path in a Grid
// Solved
// Medium
// Topics
// Companies
// Hint
// You are given a 0-indexed 2D matrix grid of size n x n, where (r, c) represents:

// A cell containing a thief if grid[r][c] = 1
// An empty cell if grid[r][c] = 0
// You are initially positioned at cell (0, 0). In one move, you can move to any adjacent cell in the grid, including cells containing thieves.

// The safeness factor of a path on the grid is defined as the minimum manhattan distance from any cell in the path to any thief in the grid.

// Return the maximum safeness factor of all paths leading to cell (n - 1, n - 1).

// An adjacent cell of cell (r, c), is one of the cells (r, c + 1), (r, c - 1), (r + 1, c) and (r - 1, c) if it exists.

// The Manhattan distance between two cells (a, b) and (x, y) is equal to |a - x| + |b - y|, where |val| denotes the absolute value of val.

 

// Example 1:


// Input: grid = [[1,0,0],[0,0,0],[0,0,1]]
// Output: 0
// Explanation: All paths from (0, 0) to (n - 1, n - 1) go through the thieves in cells (0, 0) and (n - 1, n - 1).
// Example 2:


// Input: grid = [[0,0,1],[0,0,0],[0,0,0]]
// Output: 2
// Explanation: The path depicted in the picture above has a safeness factor of 2 since:
// - The closest cell of the path to the thief at cell (0, 2) is cell (0, 0). The distance between them is | 0 - 0 | + | 0 - 2 | = 2.
// It can be shown that there are no other paths with a higher safeness factor.
// Example 3:


// Input: grid = [[0,0,0,1],[0,0,0,0],[0,0,0,0],[1,0,0,0]]
// Output: 2
// Explanation: The path depicted in the picture above has a safeness factor of 2 since:
// - The closest cell of the path to the thief at cell (0, 3) is cell (1, 2). The distance between them is | 0 - 1 | + | 3 - 2 | = 2.
// - The closest cell of the path to the thief at cell (3, 0) is cell (3, 2). The distance between them is | 3 - 3 | + | 0 - 2 | = 2.
// It can be shown that there are no other paths with a higher safeness factor.

var maximumSafenessFactor = function(grid) {
    const n = grid.length;
    if (grid[n - 1][n - 1] === 1 || grid[0][0] === 1) return 0;

    const dist = computeDistanceGrid(grid);
    const pq = new MaxPriorityQueue({ priority: x => x[0] });
    const vis = Array.from({ length: n }, () => Array(n).fill(false));

    const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1]
    ];

    pq.enqueue([dist[0][0], 0, 0]);
    vis[0][0] = true;

    while (!pq.isEmpty()) {
        const [ds, i, j] = pq.dequeue().element;

        if (i === n - 1 && j === n - 1) return ds;

        for (const [dx, dy] of directions) {
            const newRow = i + dx;
            const newCol = j + dy;
            if (isValid(newRow, newCol, n) && grid[newRow][newCol] !== 1 && !vis[newRow][newCol]) {
                vis[newRow][newCol] = true;
                const ds1 = dist[newRow][newCol];
                pq.enqueue([Math.min(ds, ds1), newRow, newCol]);
            }
        }
    }

    return 0;
};

function isValid(x, y, n) {
    return x >= 0 && x < n && y >= 0 && y < n;
}

function computeDistanceGrid(grid) {
    const n = grid.length;
    const distGrid = Array.from({ length: n }, () => Array(n).fill(Infinity));
    const q = [];
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                q.push([i, j]);
                distGrid[i][j] = 0;
            }
        }
    }

    const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1]
    ];

    while (q.length > 0) {
        const [x, y] = q.shift();
        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;
            if (isValid(newX, newY, n) && distGrid[newX][newY] === Infinity) {
                distGrid[newX][newY] = distGrid[x][y] + 1;
                q.push([newX, newY]);
            }
        }
    }

    return distGrid;
}