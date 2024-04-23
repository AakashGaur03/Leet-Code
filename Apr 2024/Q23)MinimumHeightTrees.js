// Minimum Height Trees
// Solved
// Medium
// Topics
// Companies
// Hint
// A tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any connected graph without simple cycles is a tree.

// Given a tree of n nodes labelled from 0 to n - 1, and an array of n - 1 edges where edges[i] = [ai, bi] indicates that there is an undirected edge between the two nodes ai and bi in the tree, you can choose any node of the tree as the root. When you select a node x as the root, the result tree has height h. Among all possible rooted trees, those with minimum height (i.e. min(h))  are called minimum height trees (MHTs).

// Return a list of all MHTs' root labels. You can return the answer in any order.

// The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf

var findMinHeightTrees = function (n, edges) {
  const counts = new Array(n).fill(0);
  const links = new Array(n).fill(0);

  for (const edge of edges) {
    links[edge[0]] ^= edge[1];
    counts[edge[0]]++;
    links[edge[1]] ^= edge[0];
    counts[edge[1]]++;
  }

  const Qu = [];
  const dists = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    if (counts[i] === 1) Qu.push(i);
  }

  let stp = 1;
  while (Qu.length > 0) {
    const size = Qu.length;
    for (let j = 0; j < size; j++) {
      const tmp = Qu.shift();
      links[links[tmp]] ^= tmp;
      counts[links[tmp]]--;
      if (counts[links[tmp]] === 1) {
        dists[links[tmp]] = Math.max(stp, dists[links[tmp]]);
        Qu.push(links[tmp]);
      }
    }
    stp++;
  }

  const maxDist = Math.max(...dists);
  const res = [];
  for (let i = 0; i < n; i++) {
    if (dists[i] === maxDist) res.push(i);
  }

  return res;
};
