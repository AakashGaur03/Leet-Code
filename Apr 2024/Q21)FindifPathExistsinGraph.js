// 1971. Find if Path Exists in Graph
// Solved
// Easy
// Topics
// Companies
// There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

// You want to determine if there is a valid path that exists from vertex source to vertex destination.

// Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.

 

// Example 1:


// Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
// Output: true
// Explanation: There are two paths from vertex 0 to vertex 2:
// - 0 → 1 → 2
// - 0 → 2
// Example 2:


// Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
// Output: false
// Explanation: There is no path from vertex 0 to vertex 5.


var validPath = function(n, edges, source, destination) {
    if (n === 1) return true; // Special case where there is only one vertex
    let visited = new Array(n).fill(false);
    visited[source] = true;
    let flag = true;
    while (flag) {
        flag = false;
        for (const edge of edges) {
            if (visited[edge[0]] !== visited[edge[1]]) {
                visited[edge[0]] = true;
                visited[edge[1]] = true;
                flag = true;
            }
            if (visited[destination]) return true;
        }
    }
    return false;
};