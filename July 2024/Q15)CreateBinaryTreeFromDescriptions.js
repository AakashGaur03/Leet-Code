// Create Binary Tree From Descriptions
// Solved
// Medium
// Topics
// Companies
// Hint
// You are given a 2D integer array descriptions where descriptions[i] = [parenti, childi, isLefti] indicates that parenti is the parent of childi in a binary tree of unique values. Furthermore,

// If isLefti == 1, then childi is the left child of parenti.
// If isLefti == 0, then childi is the right child of parenti.
// Construct the binary tree described by descriptions and return its root.

// The test cases will be generated such that the binary tree is valid.

 

// Example 1:


// Input: descriptions = [[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]
// Output: [50,20,80,15,17,19]
// Explanation: The root node is the node with value 50 since it has no parent.
// The resulting binary tree is shown in the diagram.
// Example 2:


// Input: descriptions = [[1,2,1],[2,3,0],[3,4,1]]
// Output: [1,2,null,null,3,4]
// Explanation: The root node is the node with value 1 since it has no parent.
// The resulting binary tree is shown in the diagram.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
    let root= new Map();
    for(let arr of descriptions) {
        if(root.has(arr[0])) continue
        else root.set(arr[0], 1)
    }
    let map= new Map();
    for(let arr of descriptions){
        if(root.has(arr[1])){root.delete(arr[1])}
        if(map.has(arr[0])){
            let parentNode = map.get(arr[0]);
            let childNode;
            if(map.has(arr[1])){
                childNode = map.get(arr[1]);
            }else{
                childNode= new TreeNode(arr[1]);
                map.set(arr[1], childNode);
            }
            if(arr[2] === 0){
                parentNode.right = childNode
            }
            if(arr[2]=== 1){
                parentNode.left = childNode
            }
        }else{
            let parentNode = new TreeNode(arr[0]);
            map.set(arr[0], parentNode);
            let childNode;
            if(map.has(arr[1])){
                childNode = map.get(arr[1]);
            }else{
                childNode= new TreeNode(arr[1]);
                map.set(arr[1], childNode);
            }
            if(arr[2] === 0){
                parentNode.right = childNode
            }
            if(arr[2]=== 1){
                parentNode.left = childNode
            }
        }
    }
    return map.get(root.keys().next().value)
};