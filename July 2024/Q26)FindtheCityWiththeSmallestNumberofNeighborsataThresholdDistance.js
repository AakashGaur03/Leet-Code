// Find the City With the Smallest Number of Neighbors at a Threshold Distance
// Medium
// Topics
// Companies
// Hint
// There are n cities numbered from 0 to n-1. Given the array edges where edges[i] = [fromi, toi, weighti] represents a bidirectional and weighted edge between cities fromi and toi, and given the integer distanceThreshold.

// Return the city with the smallest number of cities that are reachable through some path and whose distance is at most distanceThreshold, If there are multiple such cities, return the city with the greatest number.

// Notice that the distance of a path connecting cities i and j is equal to the sum of the edges' weights along that path.

 

// Example 1:


// Input: n = 4, edges = [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], distanceThreshold = 4
// Output: 3
// Explanation: The figure above describes the graph. 
// The neighboring cities at a distanceThreshold = 4 for each city are:
// City 0 -> [City 1, City 2] 
// City 1 -> [City 0, City 2, City 3] 
// City 2 -> [City 0, City 1, City 3] 
// City 3 -> [City 1, City 2] 
// Cities 0 and 3 have 2 neighboring cities at a distanceThreshold = 4, but we have to return city 3 since it has the greatest number.
// Example 2:


// Input: n = 5, edges = [[0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,1],[3,4,1]], distanceThreshold = 2
// Output: 0
// Explanation: The figure above describes the graph. 
// The neighboring cities at a distanceThreshold = 2 for each city are:
// City 0 -> [City 1] 
// City 1 -> [City 0, City 4] 
// City 2 -> [City 3, City 4] 
// City 3 -> [City 2, City 4]
// City 4 -> [City 1, City 2, City 3] 
// The city 0 has 1 neighboring city at a distanceThreshold = 2.

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function(n, edges, distanceThreshold) {

    const dist = Array.from({length : n}, () => new Array(n).fill(Infinity));

    for(let i = 0; i < n; i++) {
        dist[i][i] = 0;
    }

    for(const [u, v, weight] of edges) {
        dist[u][v] = dist[v][u] = weight;
    }

    for(let k = 0; k < n; k++) {
        for(let u = 0; u < n; u++) {
            for(let v = 0; v < n; v++) {

                if(dist[u][v] > dist[u][k] + dist[k][v]) {
                    dist[u][v] = dist[u][k] + dist[k][v];
                }
            }
        }
    }

    let node = -1, minCities = Infinity;

    for(let i = 0; i < n; i++) {

        let cities = 0;

        for(let j = 0; j < n; j++) {
            cities += dist[i][j] > distanceThreshold ? 0 : 1;
        }

        if(cities <= minCities) {
            node = i;
            minCities = cities;
        }
    }

    return node;
};