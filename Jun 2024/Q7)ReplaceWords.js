// Replace Words
// Medium
// Topics
// Companies
// In English, we have a concept called root, which can be followed by some other word to form another longer word - let's call this word derivative. For example, when the root "help" is followed by the word "ful", we can form a derivative "helpful".

// Given a dictionary consisting of many roots and a sentence consisting of words separated by spaces, replace all the derivatives in the sentence with the root forming it. If a derivative can be replaced by more than one root, replace it with the root that has the shortest length.

// Return the sentence after the replacement.

// Example 1:

// Input: dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
// Output: "the cat was rat by the bat"
// Example 2:

// Input: dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs"
// Output: "a a b c"


// Bruteforce Approach By Own
// var replaceWords = function (dictionary, sentence) {
//   dictionary.sort();
//   for (let i = 0; i < dictionary.length; i++) {
//     for (let j = i + 1; j < dictionary.length; j++) {
//       if (dictionary[j].startsWith(dictionary[i])) {
//         dictionary.splice(j, 1);
//         j--;
//       }
//     }
//   }
//   let temp = sentence.split(" ");
//   for (let i = 0; i < dictionary.length; i++) {
//     for (let j = 0; j < temp.length; j++) {
//       if (temp[j].startsWith(dictionary[i])) {
//         temp[j] = dictionary[i];
//       }
//     }
//   }
//   let result = temp.join(" ");
//   return result;
// };



// Optimized from Leetcode

var Trie = function() {
    this.trie = new Map();
};

/** 
 * @param {string} word
 * @return {void}
 */

Trie.prototype.insert = function(word) {
    let pointer = this.trie;

    for (let i = 0; i < word.length; i++) {
        const char = word[i];

        if (pointer.has(char)) {
            pointer = pointer.get(char);
        } else {
            pointer.set(char, new Map());
            pointer = pointer.get(char);
        }
    }

    pointer.set('isEnd', true);
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let pointer = this.trie;
    let word = '';

    for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i];

        if (pointer.has(char)) {
            word += char;
            pointer = pointer.get(char);
            if (pointer.get('isEnd')) return word;
        } else {
            return prefix;
        }
    }

    return word;
};

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */

var replaceWords = function(dictionary, sentence) {
    sentence = sentence.split(' ');
    const trie = new Trie();

    for (const word of dictionary) {
        trie.insert(word);
    }

    for (let i = 0; i < sentence.length; i++) {
        sentence[i] = trie.startsWith(sentence[i]);
    }

    return sentence.join(' ');
};




(dictionary = ["cat", "cata", "catttt", "bat", "rat"]),
  (sentence = "the cattle was rattled by the battery");
// dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs"
console.log(replaceWords(dictionary, sentence));
