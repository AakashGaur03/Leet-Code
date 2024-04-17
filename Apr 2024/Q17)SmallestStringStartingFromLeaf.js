// 988. Smallest String Starting From Leaf
// Solved
// Medium
// Topics
// Companies
// You are given the root of a binary tree where each node has a value in the range [0, 25] representing the letters 'a' to 'z'.

// Return the lexicographically smallest string that starts at a leaf of this tree and ends at the root.

// As a reminder, any shorter prefix of a string is lexicographically smaller.

// For example, "ab" is lexicographically smaller than "aba".
// A leaf of a node is a node that has no children.

 

// Example 1:


// Input: root = [0,1,2,3,4,3,4]
// Output: "dba"
// Example 2:


// Input: root = [25,1,3,1,3,0,2]
// Output: "adz"
// Example 3:


// Input: root = [2,2,1,null,1,0,null,0]
// Output: "abc"
 


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
 * @return {string}
 */
var smallestFromLeaf = function(root) {
    let list = [];
    let str = "";
    inorder(root, str);
    function inorder(root, str) {
        if(root == null) return;
        let temp = String.fromCharCode(97+root.val) + str;
        if(root.left == null && root.right==null) list.push(temp);
        inorder(root.left, temp);
        inorder(root.right, temp);
    };
    list.sort();
    return list[0];
};