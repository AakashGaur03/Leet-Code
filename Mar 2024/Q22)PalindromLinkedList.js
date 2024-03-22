/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // Helper function to reverse a linked list
    const reverseLinkedList = function(node) {
        let prev = null;
        let curr = node;
        while (curr) {
            const nextNode = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextNode;
        }
        return prev;
    };
    
    if (!head || !head.next) return true; // Empty or single-node list is palindrome
    
    let slow = head;
    let fast = head;
    
    // Finding the middle of the linked list using slow and fast pointers
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // Reverse the second half of the linked list
    let reversedSecondHalf = reverseLinkedList(slow);
    
    // Compare the first half with the reversed second half
    while (reversedSecondHalf) {
        if (head.val !== reversedSecondHalf.val) {
            return false;
        }
        head = head.next;
        reversedSecondHalf = reversedSecondHalf.next;
    }
    
    return true;
};