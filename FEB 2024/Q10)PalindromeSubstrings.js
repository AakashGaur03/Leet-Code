
// WITH HELP OF NEETCODE 

// const countSubstrings = (s) => {
//   console.log(s);
//   let totalCount = 0;
//   for (let i = 0; i < s.length; i++) {
//     // For odd Length
//     totalCount += extendPalindrome(s, i, i);
//     // For even Length
//     totalCount += extendPalindrome(s, i, i + 1);
//   }
//   return totalCount;
// };

// const extendPalindrome = (s, left, right) => {
//   let count = 0;
//   while (left >= 0 && right < s.length && s[left] === s[right]) {
//     count++;
//     left--;
//     right++;
//   }
//   return count;
// };

// let s = "aaa";
// console.log(countSubstrings(s));




const countSubstrings = (s) => {
    console.log(s)
    let totalCount = 0
    for (let i = 0; i < s.length; i++) {

        totalCount+=extendPalindrome(s,i,i)
        totalCount+=extendPalindrome(s,i,i+1)
    }
    return totalCount
  };

  const extendPalindrome = (s,left,right) =>{
    let count=0
    while(left>=0 && right<s.length && s[left]===s[right])
    {
        left--
        right++
        count++
    }
    return count
  }


  let s = "abc";
console.log(countSubstrings(s));

