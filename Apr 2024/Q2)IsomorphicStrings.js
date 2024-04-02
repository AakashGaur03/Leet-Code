// Isomorphic Strings
// Easy
// Topics
// Companies
// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true


// Self Approach
const isIsomorphic = (s, t) => {
    if (s.length !== t.length)
    return false;
  const map = {};
  const map2 = {};
  i = 0;
  j = 0;
  for (const iterator of s) {
    if (!map[iterator] || map[iterator] === t[i] ) {
      map[iterator] = t[i];
      i++;
    }
    else return false
  }
  for (const iterator of t) {
    if (!map2[iterator] || map2[iterator] === s[j]) {
      map2[iterator] = s[j];
      j++;
    }
    else return false
  }
  return true
};


// Chat GPT approach
const isIsomorphic2 = (s, t) => {
    if (s.length !== t.length)
        return false;
    
    const map = new Map();
    const map2 = new Map();
    
    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];
        
        if (!map.has(charS)) {
            map.set(charS, charT);
        } else if (map.get(charS) !== charT) {
            return false;
        }
        
        if (!map2.has(charT)) {
            map2.set(charT, charS);
        } else if (map2.get(charT) !== charS) {
            return false;
        }
    }
    
    return true;
};

let s = "bbbaaaba";
let t = "aaabbbba";
// s = "foo", t = "bar"
// s = "paper", t = "title"
console.log(isIsomorphic(s, t));
