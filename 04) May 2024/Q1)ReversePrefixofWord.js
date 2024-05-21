// Reverse Prefix of Word
// Easy
// Topics
// Companies
// Hint
// Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

// For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
// Return the resulting string.

// Example 1:

// Input: word = "abcdefd", ch = "d"
// Output: "dcbaefd"
// Explanation: The first occurrence of "d" is at index 3.
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".
// Example 2:

// Input: word = "xyxzxe", ch = "z"
// Output: "zxyxxe"
// Explanation: The first and only occurrence of "z" is at index 3.
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "zxyxxe".
// Example 3:

// Input: word = "abcd", ch = "z"
// Output: "abcd"
// Explanation: "z" does not exist in word.
// You should not do any reverse operation, the resulting string is "abcd".

// var reversePrefix = function (word, ch) {
//     let wordSplit= word.split('')
//     let chAt = null
//     for (let i = 0; i < wordSplit.length; i++) {
//         if(ch==wordSplit[i]) {
//             chAt=i+1
//             break
//         }
//     }
//     if(chAt){

//         let final = wordSplit.slice(0,chAt).reverse()
//         finalResult=word.slice(chAt)
//         finalResult=finalResult.split('')
//         final.push(finalResult)
//         return final.flat().join('')
//     }else return word
// };
var reversePrefix = function (word, ch) {
    const index = word.indexOf(ch);
    if (index !== -1) {
        const prefix = word.substring(0, index + 1);
        const reversedPrefix = prefix.split('').reverse().join('');
        return reversedPrefix + word.substring(index + 1);
    } else {
        return word;
    }
};

const reversePrefixwithoutInbuilt = (word, ch) => {
    let chIndex = -1;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === ch) {
            chIndex = i;
            break;
        }
    }

    if (chIndex !== -1) {
        let prefix = '';
        for (let i = 0; i <= chIndex; i++) {
            prefix = word[i] + prefix;
        }
        
        let result = prefix;
        for (let i = chIndex + 1; i < word.length; i++) {
            result += word[i];
        }
        return result;
    } else {
        return word;
    }
};


let word = "abcdefd";
let ch = "d";
// word = "xyxzxe", ch = "z"
// word = "abcd", ch = "z"
console.log(reversePrefix(word, ch));
