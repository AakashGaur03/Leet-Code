// Balance a Binary Search Tree
// Solved
// Medium
// Topics
// Companies
// Hint
// Given the root of a binary search tree, return a balanced binary search tree with the same node values. If there is more than one answer, return any of them.

// A binary search tree is balanced if the depth of the two subtrees of every node never differs by more than 1.

 

// Example 1:


// Input: root = [1,null,2,null,3,null,4,null,null]
// Output: [2,1,3,null,null,null,4]
// Explanation: This is not the only correct answer, [3,1,4,null,2] is also correct.
// Example 2:


// Input: root = [2,1,3]
// Output: [2,1,3]
 

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
/**
 * @param {TreeNode} root
 * @param {TreeNode[]} nodes
 */
var inorder = function (root, nodes) {
    if (root === null) return;
    inorder(root.left, nodes);
    nodes.push(root);
    inorder(root.right, nodes);
}

/**
 * @param {TreeNode[]} nodes
 * @param {number} start
 * @param {number} end
 * @returns {TreeNode|null}
 */
var solve = function (nodes, start, end) {
    if (end < start) return null;
    const mid = Math.floor((end - start) / 2) + start;
    const root = nodes[mid];
    root.left = solve(nodes, start, mid - 1);
    root.right = solve(nodes, mid + 1, end);
    return root;
}

/**
 * @param {TreeNode} root
 * @returns {TreeNode|null}
 */
var balanceBST = function (root) {
    if (root === null) return null;
    const inorderTraversal = [];
    inorder(root, inorderTraversal);
    return solve(inorderTraversal, 0, inorderTraversal.length - 1);
}