// Find Common Characters
// Easy
// Topics
// Companies
// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

// Example 1:

// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:

// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]

var commonChars = function (words) {
  console.log(words.length);
  if (words.length === 0) return [];
  let result=[]
  let smapFirst = {};
  for (const firstWord of words[0]) {
    smapFirst[firstWord] = smapFirst[firstWord] + 1 || 1;
  }
  for (let i = 1; i < words.length; i++) {
    let smap = {};
    for (const char of words[i]) {
      smap[char] = smap[char] + 1 || 1;
    }
    for(const key in smapFirst){
        if(smap[key]==undefined) smapFirst[key]=0
        else smapFirst[key]=Math.min(smapFirst[key],smap[key])
    }
  }

  for (const key in smapFirst) {
    for (let i = 0; i < smapFirst[key]; i++) {
        result.push(key)
    }
  }

  return result
  console.log(smapFirst, "FF");
};
var commonChars2 = function (words) {
    let arr=[];

    let firstIndex = words[0];

    console.log(firstIndex.split(''),"KJ")
    firstIndex.split('').forEach((item, index) => {
        if (words.every(word => word.includes(item))) {
            arr.push(item);
            words = words.map(word => word.replace(item, ''));
        }
    });

    return arr;
};

words = ["bella", "label", "roller"];
// words = ["cool","lock","cook"]
console.log(commonChars2(words));
