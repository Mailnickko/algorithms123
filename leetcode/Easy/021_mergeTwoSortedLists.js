/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

const ListNode = val => {
  this.val = val;
  this.next = null;
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let dummy = new ListNode();
  let current = dummy;
  let point1 = l1;
  let point2 = l2;

  while (point1 && point2) {
    if (point1.val >= point2.val) {
      current.next = point2;
      point2 = point2.next;
    } else {
      current.next = point1;
      point1 = point1.next;
    }
    current = current.next;
  }

  if (point1) {
    current.next = point1;
  } else {
    current.next = point2;
  }

  return dummy.next;
};
