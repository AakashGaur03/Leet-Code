// 997. Find the Town Judge
// In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

// If the town judge exists, then:

// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi. If a trust relationship does not exist in trust array, then such a trust relationship does not exist.

// Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.

// Example 1:

// Input: n = 2, trust = [[1,2]]
// Output: 2
// Example 2:

// Input: n = 3, trust = [[1,3],[2,3]]
// Output: 3
// Example 3:

// Input: n = 3, trust = [[1,3],[2,3],[3,1]]
// Output: -1



// Output Limit Exceeded By own But Approach Worked

// const findJudge = (n, trust) => {
//   if (n <= 1) return n;
//   const smapLeft = {};
//   const smapRight = {};
//   for (let i = 0; i < trust.length; i++) {
//     const leftOne = trust[i][0];
//     const rightOne = trust[i][1];
//     if (smapLeft[leftOne]) {
//       smapLeft[leftOne]++;
//     } else {
//       smapLeft[leftOne] = 1;
//     }
//     if (smapRight[rightOne]) {
//       smapRight[rightOne]++;
//     } else {
//       smapRight[rightOne] = 1;
//     }
//   }

//   for (let k = 1; k <= n; k++) {
//     console.log(Object.keys(smapLeft));
//     if (!smapLeft[k] && smapRight[k] === n - 1) {
//       return k;
//     }
//   }
//   return -1;
// };

// let trust = [
//   [1, 3],
//   [2, 3],
// ];



// Above same solution optimized by ChatGpt
const findJudge = (n, trust) => {
  if (n <= 1) return n;

  const trustCount = {};

  for (let i = 0; i < trust.length; i++) {
    const leftOne = trust[i][0];
    const rightOne = trust[i][1];

    trustCount[leftOne] = (trustCount[leftOne] || 0) - 1; // Decrement count for the one who trusts
    trustCount[rightOne] = (trustCount[rightOne] || 0) + 1; // Increment count for the one who is trusted
  }

  for (let k = 1; k <= n; k++) {
    console.log(trustCount[k],"s");
    if (trustCount[k] === n - 1) {
      return k; // Return the judge if found
    }
  }

  return -1; // Return -1 if no judge is found
};

let n = 3;
let trust = [
  [1, 3],
  [2, 3],
];
console.log(findJudge(n, trust));
