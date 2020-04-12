/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    
    let start = new ListNode(0)
    start.next = head
    let current = start
    
    while (current.next !== null && current.next.next !== null) {
        let first = current.next
        let second = current.next.next
        
        first.next = second.next
        current.next = second
        current.next.next = first
        
        current = current.next.next
    }
    
    return start.next
}
