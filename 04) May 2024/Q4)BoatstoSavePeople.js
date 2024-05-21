// Boats to Save People
// Medium
// Topics
// Companies
// You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.

// Return the minimum number of boats to carry every given person.

// Example 1:

// Input: people = [1,2], limit = 3
// Output: 1
// Explanation: 1 boat (1, 2)
// Example 2:

// Input: people = [3,2,2,1], limit = 3
// Output: 3
// Explanation: 3 boats (1, 2), (2) and (3)
// Example 3:

// Input: people = [3,5,3,4], limit = 5
// Output: 4
// Explanation: 4 boats (3), (3), (4), (5)

// var numRescueBoats = function (people, limit) {
//   console.log(people, limit);
//   sortedPeople = people.sort((a, b) => a - b);
//   console.log(sortedPeople);
//   boats = 0;
//   value = [];
//   let sum=0;
//   for (let i = 0; i < sortedPeople.length; i++) {
//     sum=sum+sortedPeople[i]
//     console.log(sum)
//     if(sum>limit){
//         value.push(sum-sortedPeople[i])
//         sum=0
//     }else if(sum==limit){
//         value.push(sortedPeople[i])
//     }
// }
// console.log(value)
//   return value.length
// };
const numRescueBoats = (people, limit) => {
    people.sort((a, b) => a - b);
    let boats = 0;
    let left = 0;
    let right = people.length - 1;
    
    while (left <= right) {
      if (people[left] + people[right] <= limit) {
        left++;
      }
      right--;
      boats++;
    }
    
    return boats;
  };
  

// (people = [1, 2]), (limit = 3);
// people = [3,2,2,1], limit = 3
people = [5,1,4,2], limit = 6
// people = [3,5,3,4], limit = 5
console.log(numRescueBoats(people, limit));
