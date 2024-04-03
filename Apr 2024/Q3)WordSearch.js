// Word Search
// Medium
// Topics
// Companies
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example 1:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
// Example 2:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true
// Example 3:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false

var exist = (board, word) => {
  let m = board.length;
  let n = board[0].length;

  const backtrack = (i, j, k) => {
    if (k === word.length) return true;

    if (i < 0 || j < 0 || i >= m || j >= n || board[i][j] !== word.charAt(k))
      return false;
    const temp = board[i][j];
    board[i][j] = null;
    const result =
      backtrack(i + 1, j, k + 1) ||
      backtrack(i - 1, j, k + 1) ||
      backtrack(i, j + 1, k + 1) ||
      backtrack(i, j - 1, k + 1);

    board[i][j] = temp;
    return result;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (backtrack(i,j, 0)) return true;
    }
  }

  return false;
};

// board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
(board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
]),
  (word = "ABCCED");
console.log(exist(board, word));
