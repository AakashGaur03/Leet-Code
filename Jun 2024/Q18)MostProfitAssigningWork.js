// Most Profit Assigning Work
// Medium
// Topics
// Companies
// You have n jobs and m workers. You are given three arrays: difficulty, profit, and worker where:

// difficulty[i] and profit[i] are the difficulty and the profit of the ith job, and
// worker[j] is the ability of jth worker (i.e., the jth worker can only complete a job with difficulty at most worker[j]).
// Every worker can be assigned at most one job, but one job can be completed multiple times.

// For example, if three workers attempt the same job that pays $1, then the total profit will be $3. If a worker cannot complete any job, their profit is $0.
// Return the maximum profit we can achieve after assigning the workers to the jobs.

// Example 1:

// Input: difficulty = [2,4,6,8,10], profit = [10,20,30,40,50], worker = [4,5,6,7]
// Output: 100
// Explanation: Workers are assigned jobs of difficulty [4,4,6,6] and they get a profit of [20,20,30,30] separately.
// Example 2:

// Input: difficulty = [85,47,57], profit = [24,66,99], worker = [40,25,25]
// Output: 0

// var maxProfitAssignment = function (difficulty, profit, worker) {
//   let maxprofit = 0;
//   for (let i = 0; i < worker.length; i++) {
//     let currentWorkAbility = worker[i];
//     let currentmaxProf = 0;

//     for (let j = 0; j < difficulty.length; j++) {
//         if(currentWorkAbility>=difficulty[j]){
//             currentmaxProf=Math.max(currentmaxProf,profit[j])
//         }
//     }
//     maxprofit+=currentmaxProf
//   }
//   return maxprofit
// };


// Optimized
var maxProfitAssignment = function(difficulty, profit, worker) {
  // Create jobs array where each job is represented as [difficulty, profit]
  let jobs = [];
  for (let i = 0; i < difficulty.length; i++) {
      jobs.push([difficulty[i], profit[i]]);
  }
  
  // Sort jobs by difficulty (and by profit in case of ties in difficulty)
  jobs.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  console.log(jobs)
  // Sort workers' abilities
  worker.sort((a, b) => a - b);
  
  console.log(worker)
  let maxProfit = 0;
  let maxProfitSoFar = 0;
  let j = 0; // Pointer for jobs array
  
  // Iterate through each worker's ability
  for (let i = 0; i < worker.length; i++) {
      let currentWorkerAbility = worker[i];
      
      // Move the pointer in the jobs array to find jobs with difficulty <= current worker's ability
      while (j < jobs.length && jobs[j][0] <= currentWorkerAbility) {
          maxProfitSoFar = Math.max(maxProfitSoFar, jobs[j][1]);
          j++;
      }
      
      // Add the maximum profit found so far to the total max profit
      maxProfit += maxProfitSoFar;
  }
  return maxProfit;
};


// (difficulty = [2, 4, 6, 8, 10]),
//   (profit = [10, 20, 30, 40, 50]),
//   (worker = [4, 5, 6, 7]);
difficulty = [85,47,57], profit = [24,66,99], worker = [40,25,25]
console.log(maxProfitAssignment(difficulty, profit, worker));
