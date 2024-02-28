const firstUniqChar = (s) => {
  let smap = {};

  for (const i of s) {
    if (smap[i]) {
      smap[i]++;
    } else {
      smap[i] = 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (smap[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};

s = "aabb";
console.log(firstUniqChar(s));
// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1