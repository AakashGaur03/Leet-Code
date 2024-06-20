// Magnetic Force Between Two Balls
// Medium
// Topics
// Companies
// Hint
// In the universe Earth C-137, Rick discovered a special form of magnetic force between two balls if they are put in his new invented basket. Rick has n empty baskets, the ith basket is at position[i], Morty has m balls and needs to distribute the balls into the baskets such that the minimum magnetic force between any two balls is maximum.

// Rick stated that magnetic force between two different balls at positions x and y is |x - y|.

// Given the integer array position and the integer m. Return the required force.

 

// Example 1:


// Input: position = [1,2,3,4,7], m = 3
// Output: 3
// Explanation: Distributing the 3 balls into baskets 1, 4 and 7 will make the magnetic force between ball pairs [3, 3, 6]. The minimum magnetic force is 3. We cannot achieve a larger minimum magnetic force than 3.
// Example 2:

// Input: position = [5,4,3,2,1,1000000000], m = 2
// Output: 999999999
// Explanation: We can use baskets 1 and 1000000000.
 
var maxDistance = function(position, m) {
    var maxDistance = function(position, m) {
        position.sort((a, b) => a - b);
        let lo = 1;
        let hi = Math.floor((position[position.length - 1] - position[0]) / (m - 1));
        let ans = 1;
    
        while (lo <= hi) {
            let mid = lo + Math.floor((hi - lo) / 2);
            if (canWePlace(position, mid, m)) {
                ans = mid;
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        
        return ans;
    };
    
    function canWePlace(arr, dist, balls) {
        let countBalls = 1;
        let lastPlaced = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] - lastPlaced >= dist) {
                countBalls++;
                lastPlaced = arr[i];
            }
            if (countBalls >= balls) {
                return true;
            }
        }
        return false;
    }
    
};

// position = [1,2,3,4,7], m = 3
position = [5,4,3,2,1,1000000000], m = 2
console.log(maxDistance(position,m))