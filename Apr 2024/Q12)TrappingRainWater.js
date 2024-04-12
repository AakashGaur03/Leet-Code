// 42. Trapping Rain Water
// Solved
// Hard
// Topics
// Companies
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

// Example 1:


// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9


var trap = function(height) {
    
    let max1 = 0;
    let left = [height.length];
    for(let i = 0; i < height.length; i++) { 
        if(max1 < height[i]) {
            max1 = height[i];
        }
        left[i] = max1;
    }
        
    let max2 = 0;
    
    let right = [height.length];
    for(let i = height.length-1; i >= 0; i--){
        if(max2 < height[i]) {
            max2 = height[i];
        }
        right[i] = max2;
    }
        
    let trap = 0;
    for(let i = 0; i  < height.length; i++) {
        trap += Math.min(left[i], right[i]) - height[i];
    }
    return trap;        
};