// 2709. Greatest Common Divisor Traversal
// You are given a 0-indexed integer array nums, and you are allowed to traverse between its indices. You can traverse between index i and index j, i != j, if and only if gcd(nums[i], nums[j]) > 1, where gcd is the greatest common divisor.

// Your task is to determine if for every pair of indices i and j in nums, where i < j, there exists a sequence of traversals that can take us from i to j.

// Return true if it is possible to traverse between all such pairs of indices, or false otherwise.

 

// Example 1:

// Input: nums = [2,3,6]
// Output: true
// Explanation: In this example, there are 3 possible pairs of indices: (0, 1), (0, 2), and (1, 2).
// To go from index 0 to index 1, we can use the sequence of traversals 0 -> 2 -> 1, where we move from index 0 to index 2 because gcd(nums[0], nums[2]) = gcd(2, 6) = 2 > 1, and then move from index 2 to index 1 because gcd(nums[2], nums[1]) = gcd(6, 3) = 3 > 1.
// To go from index 0 to index 2, we can just go directly because gcd(nums[0], nums[2]) = gcd(2, 6) = 2 > 1. Likewise, to go from index 1 to index 2, we can just go directly because gcd(nums[1], nums[2]) = gcd(3, 6) = 3 > 1.


function canTraverseAllPairs(nums) {
    // Count of elements in the array
    const numElements = nums.length;
    
    // If only one element, trivially it can traverse itself
    if (numElements === 1) return true;
    
    // Array to maintain disjoint set data structure
    const disjointSet = Array.from({ length: numElements }, (_, index) => index);
    
    // Array to store size of each set for union-find
    const setSize = Array(numElements).fill(1);
    
    // Map to store the first occurrence index of each factor
    const factorFirstOccurrence = new Map();
    
    // Function to find the leader of a set using path compression
    function findSetLeader(x) {
        if (disjointSet[x] === x) return x;
        disjointSet[x] = findSetLeader(disjointSet[x]);
        return disjointSet[x];
    }
    
    // Function to union two sets based on their leaders
    function unionSets(x, y) {
        const xLeader = findSetLeader(x);
        const yLeader = findSetLeader(y);
        if (xLeader === yLeader) return;
        if (setSize[xLeader] < setSize[yLeader]) {
            disjointSet[xLeader] = yLeader;
            setSize[yLeader] += setSize[xLeader];
        } else {
            disjointSet[yLeader] = xLeader;
            setSize[xLeader] += setSize[yLeader];
        }
    }
    
    // Iterating through each element in the array
    for (let i = 0; i < numElements; i++) {
        let num = nums[i];
        let divisor = 2;
        
        // Factorizing the current element
        while (divisor * divisor <= num) {
            if (num % divisor === 0) {
                if (factorFirstOccurrence.has(divisor)) {
                    unionSets(i, factorFirstOccurrence.get(divisor));
                } else {
                    factorFirstOccurrence.set(divisor, i);
                }
                while (num % divisor === 0) {
                    num /= divisor;
                }
            }
            divisor++;
        }
        
        // Handling remaining prime factor greater than 1
        if (num > 1) {
            if (factorFirstOccurrence.has(num)) {
                unionSets(i, factorFirstOccurrence.get(num));
            } else {
                factorFirstOccurrence.set(num, i);
            }
        }
    }
    
    // If all elements belong to the same set, traversal is possible
    return setSize[findSetLeader(0)] === numElements;
}

let nums = [2,3,6]

console.log(canTraverseAllPairs(nums))