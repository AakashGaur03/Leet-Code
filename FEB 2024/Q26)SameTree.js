// 100. Same Tree
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
// Example 1:

// Input: p = [1,2,3], q = [1,2,3]
// Output: true
// Example 2:

// Input: p = [1,2], q = [1,null,2]
// Output: false




/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// Above is given in Problem statement Only 

const isSameTree = (p, q) => {
    if(!p && !q) return true
    if(!p || !q) return false
    
    if(p.val!==q.val) return false

    return isSameTree(p.right,q.right) && isSameTree(p.left,q.left)
}

let p = [1, 2, 3];
let q = [1, 2, 3];

console.log(isSameTree(p, q));
