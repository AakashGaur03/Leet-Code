// Reverse Linked List
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:

// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []

var reverseList = function(head) {
    // Special case...
    if (head == null || head.next == null) return head;
    // Create a new node to call the function recursively and we get the reverse linked list...
    var res = reverseList(head.next);
    // Set head node as head.next.next...
    head.next.next = head;
    //set head's next to be null...
    head.next = null;
    return res;     // Return the reverse linked list...
};