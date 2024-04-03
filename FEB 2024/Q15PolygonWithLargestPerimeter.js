// 2971. Find Polygon With the Largest Perimeter
// You are given an array of positive integers nums of length n.

// A polygon is a closed plane figure that has at least 3 sides. The longest side of a polygon is smaller than the sum of its other sides.

// Conversely, if you have k (k >= 3) positive real numbers a1, a2, a3, ..., ak where a1 <= a2 <= a3 <= ... <= ak and a1 + a2 + a3 + ... + ak-1 > ak, then there always exists a polygon with k sides whose lengths are a1, a2, a3, ..., ak.

// The perimeter of a polygon is the sum of lengths of its sides.

// Return the largest possible perimeter of a polygon whose sides can be formed from nums, or -1 if it is not possible to create a polygon.

 

// Example 1:

// Input: nums = [5,5,5]
// Output: 15
// Explanation: The only possible polygon that can be made from nums has 3 sides: 5, 5, and 5. The perimeter is 5 + 5 + 5 = 15.
// Example 2:

// Input: nums = [1,12,1,2,5,50,3]
// Output: 12
// Explanation: The polygon with the largest perimeter which can be made from nums has 5 sides: 1, 1, 2, 3, and 5. The perimeter is 1 + 1 + 2 + 3 + 5 = 12.
// We cannot have a polygon with either 12 or 50 as the longest side because it is not possible to include 2 or more smaller sides that have a greater sum than either of them.
// It can be shown that the largest possible perimeter is 12.
// Example 3:

// Input: nums = [5,5,50]
// Output: -1
// Explanation: There is no possible way to form a polygon from nums, as a polygon has at least 3 sides and 50 > 5 + 5.




// Approach
// 1) Sort the array: Start by sorting the array of numbers in ascending order.

// 2) Initialize variables: Set up variables to track the running sum (sum) and the largest perimeter found so far (ans).

// 3) Iterate through the sorted array: Loop through each number in the sorted array.

// 4) Check polygon condition: For each number, check if it's smaller than the sum of all previous numbers encountered.

// 5) Update largest perimeter: If the condition is met, update ans with the sum of the current number and the running sum. Finally, return the largest perimeter found (ans).


// By own but minor help from Leetcode
const largestPerimeter =(nums)=> {
    if(nums.length<3) return -1
    
    let sum=0;
    let result=-1
    
    nums.sort((a,b)=>a-b)
    console.log(nums)    
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] < sum){
            result=nums[i]+sum
        }
        sum+=nums[i]
    }
    return result
};


let nums = [1,12,1,2,5,50,3]
console.log(largestPerimeter(nums))

