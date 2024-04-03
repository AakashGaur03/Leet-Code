// const divideArray = (nums, k) => {
//   nums.sort((a, b) => a - b);
//   const result = [];
//   for (let i = 0; i < nums.length; i += 3) {
//     const currentArr = nums.slice(i, i + 3);
//     if (
//       currentArr[2] - currentArr[1] > k ||
//       currentArr[1] - currentArr[0] > k ||
//       currentArr[2] - currentArr[0] > k
//     ) {
//       return [];
//     }
//     result.push(currentArr);
//   }
//   return result;
// };
const divideArray = (nums, k) => {
    nums.sort((a, b) => a - b);
    const result = [];
    console.log(nums)
    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i+1],nums[i],nums[i+1] - nums[i])
        console.log(nums[i+2],nums[i],nums[i+2] - nums[i])
        console.log(nums[i+2],nums[i+1],nums[i+2] - nums[i+1])
      if (
        nums[i+1] - nums[i] > k ||
        nums[i+2] - nums[i] > k ||
        nums[i+2] - nums[i+1] > k
      ) {
        return [];
      }
      result.push([nums[i],nums[i+1],nums[i+2]]);
      i += 2;
    }
    return result;
  };
  nums = [1,3,4,8,7,9,3,5,1]
k = 2;
console.log(divideArray(nums, k));
