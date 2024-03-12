// 1171. Remove Zero Sum Consecutive Nodes from Linked List

// Given the head of a linked list, we repeatedly delete consecutive sequences of nodes that sum to 0 until there are no such sequences.

// After doing so, return the head of the final linked list.  You may return any such answer.

 

// (Note that in the examples below, all sequences are serializations of ListNode objects.)

// Example 1:

// Input: head = [1,2,-3,3,1]
// Output: [3,1]
// Note: The answer [1,2,1] would also be accepted.
// Example 2:

// Input: head = [1,2,3,-3,4]
// Output: [1,2,4]
// Example 3:

// Input: head = [1,2,3,-3,-2]
// Output: [1]


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeZeroSumSublists = function(head) {
    let prefixSum = 0;
    const mp = new Map();
    const dummy = new ListNode(0);
    dummy.next = head;
    mp.set(0, dummy);
    while (head) {
        prefixSum += head.val;
        if (mp.has(prefixSum)) {
            let start = mp.get(prefixSum);
            let temp = start;
            let pSum = prefixSum;
            while (temp !== head) {
                temp = temp.next;
                pSum += temp.val;
                if (temp !== head)
                    mp.delete(pSum);
            }
            start.next = head.next;
        } else {
            mp.set(prefixSum, head);
        }
        head = head.next;
    }
    return dummy.next;
};