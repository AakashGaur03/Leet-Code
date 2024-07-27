// Minimum Cost to Convert String I
// Solved
// Medium
// Topics
// Companies
// Hint
// You are given two 0-indexed strings source and target, both of length n and consisting of lowercase English letters. You are also given two 0-indexed character arrays original and changed, and an integer array cost, where cost[i] represents the cost of changing the character original[i] to the character changed[i].

// You start with the string source. In one operation, you can pick a character x from the string and change it to the character y at a cost of z if there exists any index j such that cost[j] == z, original[j] == x, and changed[j] == y.

// Return the minimum cost to convert the string source to the string target using any number of operations. If it is impossible to convert source to target, return -1.

// Note that there may exist indices i, j such that original[j] == original[i] and changed[j] == changed[i].

 

// Example 1:

// Input: source = "abcd", target = "acbe", original = ["a","b","c","c","e","d"], changed = ["b","c","b","e","b","e"], cost = [2,5,5,1,2,20]
// Output: 28
// Explanation: To convert the string "abcd" to string "acbe":
// - Change value at index 1 from 'b' to 'c' at a cost of 5.
// - Change value at index 2 from 'c' to 'e' at a cost of 1.
// - Change value at index 2 from 'e' to 'b' at a cost of 2.
// - Change value at index 3 from 'd' to 'e' at a cost of 20.
// The total cost incurred is 5 + 1 + 2 + 20 = 28.
// It can be shown that this is the minimum possible cost.
// Example 2:

// Input: source = "aaaa", target = "bbbb", original = ["a","c"], changed = ["c","b"], cost = [1,2]
// Output: 12
// Explanation: To change the character 'a' to 'b' change the character 'a' to 'c' at a cost of 1, followed by changing the character 'c' to 'b' at a cost of 2, for a total cost of 1 + 2 = 3. To change all occurrences of 'a' to 'b', a total cost of 3 * 4 = 12 is incurred.
// Example 3:

// Input: source = "abcd", target = "abce", original = ["a"], changed = ["e"], cost = [10000]
// Output: -1
// Explanation: It is impossible to convert source to target because the value at index 3 cannot be changed from 'd' to 'e'.
 

/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (source, target, original, changed, cost) {
    class Heap {
        constructor() {
            this.heap = new Array();
            this.heap.push(0);
        }

        enqueue(val) {
            this.heap.push(val);
            let i = this.heap.length - 1;
            while (i > 1 && this.heap[i][1] < this.heap[Math.floor(i / 2)][1]) {
                let tmp = this.heap[i];
                this.heap[i] = this.heap[Math.floor(i / 2)];
                this.heap[Math.floor(i / 2)] = tmp;
                i = Math.floor(i / 2);
            }
        }

        dequeue() {
            if (this.heap.length == 1) {
                return -1;
            }
            if (this.heap.length == 2) {
                return this.heap.pop();
            }

            let res = this.heap[1];
            // Move last value to root
            this.heap[1] = this.heap.pop();
            let i = 1;
            // Percolate down
            while (2 * i < this.heap.length) {
                if (
                    2 * i + 1 < this.heap.length &&
                    this.heap[2 * i + 1][1] < this.heap[2 * i][1] &&
                    this.heap[i][1] > this.heap[2 * i + 1][1]
                ) {
                    // Swap right child
                    let tmp = this.heap[i];
                    this.heap[i] = this.heap[2 * i + 1];
                    this.heap[2 * i + 1] = tmp;
                    i = 2 * i + 1;
                } else if (this.heap[i][1] > this.heap[2 * i][1]) {
                    // Swap left child
                    let tmp = this.heap[i];
                    this.heap[i] = this.heap[2 * i];
                    this.heap[2 * i] = tmp;
                    i = 2 * i;
                } else {
                    break;
                }
            }
            return res;
        }
    }
    let graph = original.reduce((a, c, i) => {
        if (a[c]) {
            a[c].push([changed[i], cost[i]]);
        } else {
            a[c] = [];
            a[c].push([changed[i], cost[i]]);
        }
        return a;
    }, {});
    let data = {};
    for (let key in graph) {
        let h = new Heap();
        h.enqueue([key, 0]);
        let shortest = {};
        while (h.heap[1] !== undefined) {
            let [n1, w1] = h.dequeue();
            if (n1 in shortest) {
                continue;
            }
            shortest[n1] = w1;
            if (n1 in graph) {
                for (let [n2, w2] of graph[n1]) {
                    h.enqueue([n2, w1 + w2]);
                }
            }
        }
        data[key] = shortest;
    }

    let min_cost = 0;
    for (let i = 0; i < source.length; i++) {
        if (source[i] !== target[i]) {
            if (data[source[i]] && data[source[i]][target[i]]) {
                min_cost += data[source[i]][target[i]];
            } else {
                return -1;
            }
        }
    }
    return min_cost;
};