// 76. Minimum Window Substring

// Given two strings s and t of lengths m and n respectively, return the minimum window
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// const minWindow = (s, t) => {
//   console.log(s);
//   console.log(t);
//   const sMap = {};
//   for (const i of s) {
//     if (sMap[i]) {
//       sMap[i]++;
//     } else {
//       sMap[i] = 1;
//     }
//   }
//   for (const char of t) {
//     if (sMap[char]) {
//       return true;
//     }
//   }

//   return [];

// };
const minWindow = (s, t) => {
  const tFreqMap = {};
  const windowFreqMap = {};

  // Populate frequency map for characters in t
  for (let char of t) {
    tFreqMap[char] = (tFreqMap[char] || 0) + 1;
  }

  // Initialize pointers and variables
  let left = 0;
  let right = 0;
  let minLength = Infinity;
  let minStart = 0;
  let requiredChars = Object.keys(tFreqMap).length;

  // Counter for characters needed to form the desired window
  let formedChars = 0;

  // Move the right pointer to expand the window
  while (right < s.length) {
    const char = s[right];

    // Update frequency map for the current window
    windowFreqMap[char] = (windowFreqMap[char] || 0) + 1;

    // Check if the current character satisfies the requirement in t
    if (
      tFreqMap[char] !== undefined &&
      windowFreqMap[char] === tFreqMap[char]
    ) {
      formedChars++;
    }

    // Try to minimize the window by moving the left pointer
    while (left <= right && formedChars === requiredChars) {
      // Update minimum window substring
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        minStart = left;
      }

      // Move the left pointer and update frequency map
      const leftChar = s[left];
      windowFreqMap[leftChar]--;
      if (
        tFreqMap[leftChar] !== undefined &&
        windowFreqMap[leftChar] < tFreqMap[leftChar]
      ) {
        formedChars--;
      }

      // Move the left pointer to minimize the window
      left++;
    }

    // Move the right pointer to expand the window
    right++;
  }

  // Return the minimum window substring or an empty string if not found
  return minLength === Infinity
    ? ""
    : s.substring(minStart, minStart + minLength);
};

(s = "a"), (t = "aa");
console.log(minWindow(s, t));


// Done By ChatGpt