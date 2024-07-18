// Number of Good Leaf Nodes Pairs
// Solved
// Medium
// Topics
// Companies
// Hint
// You are given the root of a binary tree and an integer distance. A pair of two different leaf nodes of a binary tree is said to be good if the length of the shortest path between them is less than or equal to distance.

// Return the number of good leaf node pairs in the tree.

 

// Example 1:


// Input: root = [1,2,3,null,4], distance = 3
// Output: 1
// Explanation: The leaf nodes of the tree are 3 and 4 and the length of the shortest path between them is 3. This is the only good pair.
// Example 2:


// Input: root = [1,2,3,4,5,6,7], distance = 3
// Output: 2
// Explanation: The good pairs are [4,5] and [6,7] with shortest path = 2. The pair [4,6] is not good because the length of ther shortest path between them is 4.
// Example 3:

// Input: root = [7,1,4,6,null,5,3,null,null,null,null,null,2], distance = 3
// Output: 1
// Explanation: The only good pair is [2,5].


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
 * @param {number} distance
 * @return {number}
 */
function countPairs(root, distance) {
    let count = 0;

    function DFSR(node) {
        if (!node) return [];
        if (!node.left && !node.right) return [1];

        const leftDistances = DFSR(node.left);
        const rightDistances = DFSR(node.right);
        for (let l of leftDistances) {
            for (let r of rightDistances) {
                if (l + r <= distance) count++;
            }
        }

        const allDistances = [];
        for (let l of leftDistances) {
            if (l + 1 < distance) { allDistances.push(l + 1) ;}
        }
        for (let r of rightDistances) {
            if (r + 1 < distance) { allDistances.push(r + 1) ;}
        }

        return allDistances;
    }

    DFSR(root);
    return count;
}