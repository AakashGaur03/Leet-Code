class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * Check if the given binary tree is an even-odd tree.
 * An even-odd tree is a binary tree where:
 * 1. Each level of the binary tree is either odd or even.
 * 2. For each level, nodes' values are strictly increasing from left to right.
 * 3. For odd levels, nodes' values are strictly odd.
 * 4. For even levels, nodes' values are strictly even.
 * @param {TreeNode} root - The root node of the binary tree.
 * @return {boolean} Returns true if the given binary tree is an even-odd tree, otherwise false.
 */
const isEvenOddTree = function(root) {
    if (!root) {
        return true;
    }

    // Initialize a queue with root node and level indicator
    let queue = [[root, 0]];
    let prevVal = null;

    while (queue.length > 0) {
        let size = queue.length;
        let currentLevel = queue[0][1]; // Current level

        // Check if the current level is even or odd
        let expectedParity = currentLevel % 2 === 0 ? 1 : 0;

        for (let i = 0; i < size; i++) {
            let [node, level] = queue.shift();

            // Check if the current node's value violates the conditions
            if ((node.val % 2 !== expectedParity) || (prevVal !== null && (currentLevel % 2 === 0 ? node.val <= prevVal : node.val >= prevVal))) {
                return false;
            }

            // Update the previous value for the next iteration
            prevVal = node.val;

            // Add children to the queue along with their levels
            if (node.left) {
                queue.push([node.left, level + 1]);
            }
            if (node.right) {
                queue.push([node.right, level + 1]);
            }
        }
        prevVal = null; // Reset prevVal for the next level
    }

    return true;
};

// Example usage:
// Define the tree
const root = new TreeNode(1);
root.left = new TreeNode(10);
root.right = new TreeNode(4);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);
root.right.right = new TreeNode(9);

// Check if it's an even-odd tree
console.log(isEvenOddTree(root)); // Output: true