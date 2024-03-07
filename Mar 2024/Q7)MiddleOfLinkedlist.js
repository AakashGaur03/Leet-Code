// 876. Middle of the Linked List
// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Example 2:

// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

var listLength = function (head) {
  let length = 0;
  let current = head;
  while (current !== null) {
    length++;
    current = current.next;
  }
  return length;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  const length = listLength(head);
  const middle = Math.floor(length / 2);
  let temp = head;
  let count = 0;
  while (count < middle) {
    temp = temp.next;
    count++;
  }
  return temp;
};





// Not accepted in case of Linked List
// var middleNode = function (head) {
//     n=Math.ceil(head.length/2)
//     result=[]
//     for (let i =n ; i < head.length+1; i++) {
//         result.push(i)

//     }
//     return result
// };

let head = [1, 2, 3, 4, 5];
console.log(middleNode(head));
