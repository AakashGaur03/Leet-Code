// // Time limit Exceeded on Leetcode Own approach


// const sequentialDigits = (low, high) => {
//   let result = [];
//   for (let i = low; i < high; i++) {
//     let num = i.toString();
//     let isSequential = true;
//     for (let j = 0; j < num.length - 1; j++) {
//       if (parseInt(num[j]) + 1 !== parseInt(num[j + 1])) {
//         isSequential = false;
//         break
//       }
//     } 
//     if(isSequential)
//     {
//       result.push(num)
//       i=parseInt(num)+1
//     }
//   }
//   return result;
// };

// const low = 10;
// const high = 1000000000;
// console.log(sequentialDigits(low, high));


// Two Pointer Approach 
// 1 2 3 4 5 6 7 8 9
// | |
// 1 2 3 4 5 6 7 8 9
// |   |
// 1 2 3 4 5 6 7 8 9
// |     |
// 1 2 3 4 5 6 7 8 9
//   | |
const sequentialDigits=(low,high)=>{

  let result=[]
  
  for (let i = 1; i < 9; i++) {
    let firstNum=i;
    let secondNum=i+1;
    while(firstNum<=high && secondNum<=9)
    {
      firstNum=firstNum*10+secondNum
      if(firstNum>=low && firstNum<=high)
      {
        result.push(firstNum)
      }
      secondNum++
    }
    
  }
  result.sort((a,b)=>(a-b))
  return result
}


const low = 10;
const high = 1000000000;
console.log(sequentialDigits(low, high));
