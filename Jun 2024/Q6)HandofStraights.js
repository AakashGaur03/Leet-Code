// Hand of Straights
// Medium
// Topics
// Companies
// Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards.

// Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, return true if she can rearrange the cards, or false otherwise.

// Example 1:

// Input: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
// Output: true
// Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]
// Example 2:

// Input: hand = [1,2,3,4,5], groupSize = 4
// Output: false
// Explanation: Alice's hand can not be rearranged into groups of 4.

// Own Logic with Help of GPT code
// var isNStraightHand = function (hand, groupSize) {
//   hand.sort((a, b) => a - b);
//   console.log(hand);

//   while (hand.length > 0) {
//     let start = hand[0];
//     let size = 0;

//     for (let i = 0; i < groupSize; i++) {
//       let index = hand.indexOf(start + i);

//       if (index === -1) {
//         return false;
//       } else {
//         hand.splice(index, 1);
//         size++;
//       }
//     }

//     if (size !== groupSize) {
//       return false;
//     }
//   }

//   return true;
// };

// Optimized Apporach GPT

var isNStraightHand = function (hand, groupSize) {
  if (hand.length % groupSize !== 0) {
    return false;
  }

  // Sort the hand
  hand.sort((a, b) => a - b);

  // Create a frequency map to count occurrences of each card
  const countMap = new Map();
  for (let card of hand) {
    countMap.set(card, (countMap.get(card) || 0) + 1);
  }

  // Iterate over each card in the sorted hand
  for (let card of hand) {
    if (countMap.get(card) > 0) {
      // Try to create a group starting with this card
      for (let i = 0; i < groupSize; i++) {
        let currentCard = card + i;
        if (countMap.get(currentCard) > 0) {
          countMap.set(currentCard, countMap.get(currentCard) - 1);
        } else {
          // If we can't find enough consecutive cards, return false
          return false;
        }
      }
    }
  }

  return true;
};

// Example usage:
console.log(isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3)); // Output: true
console.log(isNStraightHand([1, 2, 3, 4, 5], 4)); // Output: false

(hand = [1, 2, 3, 6, 2, 3, 4, 7, 8]), (groupSize = 3);
// hand = [1,2,3,4,5], groupSize = 4

console.log(isNStraightHand(hand, groupSize));
