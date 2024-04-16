// Add One Row to Tree
// Solved
// Medium
// Topics
// Companies
// Given the root of a binary tree and two integers val and depth, add a row of nodes with value val at the given depth depth.

// Note that the root node is at depth 1.

// The adding rule is:

// Given the integer depth, for each not null tree node cur at the depth depth - 1, create two tree nodes with value val as cur's left subtree root and right subtree root.
// cur's original left subtree should be the left subtree of the new left subtree root.
// cur's original right subtree should be the right subtree of the new right subtree root.
// If depth == 1 that means there is no depth depth - 1 at all, then create a tree node with value val as the new root of the whole original tree, and the original tree is the new root's left subtree.
 

// Example 1:


// Input: root = [4,2,6,3,1,5], val = 1, depth = 2
// Output: [4,1,1,2,null,null,6,3,1,5]
// Example 2:


// Input: root = [4,2,null,3,1], val = 1, depth = 3
// Output: [4,2,null,1,1,3,null,null,1]


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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
  
    const inorder = (node, height = 1, child = '') => {
        if (!node) {            
            return height === depth ? new TreeNode(val) : node;
        }
        
        if (height === depth) {
            // When height matches, insert new node. 
            // Also parent has passed which child it is, left or right.
            // Append current tree at appropriate position
            const newNode = new TreeNode(val);
            if (child === 'L' || child === '') {
                newNode.left = node;
            }
            else if (child === 'R') {
                newNode.right = node;
            }
            return newNode;
        } else if (height < depth) {
            node.left = inorder(node.left, height + 1, 'L');
            node.right = inorder(node.right, height + 1, 'R');
            return node;
        }
        
        return node;
    }
    
    return inorder(root);
};