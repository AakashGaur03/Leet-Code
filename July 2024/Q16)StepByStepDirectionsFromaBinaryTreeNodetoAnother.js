// Step-By-Step Directions From a Binary Tree Node to Another
// Solved
// Medium
// Topics
// Companies
// Hint
// You are given the root of a binary tree with n nodes. Each node is uniquely assigned a value from 1 to n. You are also given an integer startValue representing the value of the start node s, and a different integer destValue representing the value of the destination node t.

// Find the shortest path starting from node s and ending at node t. Generate step-by-step directions of such path as a string consisting of only the uppercase letters 'L', 'R', and 'U'. Each letter indicates a specific direction:

// 'L' means to go from a node to its left child node.
// 'R' means to go from a node to its right child node.
// 'U' means to go from a node to its parent node.
// Return the step-by-step directions of the shortest path from node s to node t.

 

// Example 1:


// Input: root = [5,1,2,3,null,6,4], startValue = 3, destValue = 6
// Output: "UURL"
// Explanation: The shortest path is: 3 → 1 → 5 → 2 → 6.
// Example 2:


// Input: root = [2,1], startValue = 2, destValue = 1
// Output: "L"
// Explanation: The shortest path is: 2 → 1.
 

 /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function (root, startValue, destValue) {
    let node = root;

    let dfs = function (node, path, target) {
        if (!node) return false

        if (node.val == target) return path

        path.push("L")
        let res = dfs(node.left, path, target)
        if (res) return res

        path.pop()
        path.push("R")
        res = dfs(node.right, path, target)
        if (res) return res

        path.pop()
        return false
    }

    let start_path = dfs(node, [], startValue);
    let dest_path = dfs(node, [], destValue);

    let i = 0;
    while (i < Math.min(start_path.length, dest_path.length)) {
        if (start_path[i] != dest_path[i]) break
        i++
    }

    let result =  "U".repeat(start_path.slice(i).length) + dest_path.slice(i)

    return result.split(",").join("")
};