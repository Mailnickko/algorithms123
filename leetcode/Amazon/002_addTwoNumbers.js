function ListNode(val) {
  this.val = val;
  this.next = null;
}

const addTwoNumbers = (l1, l2) => {
  const dummy = new ListNode();
  let curr = dummy;
  let carry = 0;
  let val1;
  let val2;
  let total;

  while (l1 || l2) {
    if (l1) {
      val1 = l1.val;
      l1 = l1.next;
    } else {
      val1 = 0;
    }

    if (l2) {
      val2 = l2.val;
      l2 = l2.next;
    } else {
      val2 = 0;
    }
    total = val1 + val2 + carry;
    if (total >= 10) {
      carry = 1;
      total -= 10;
    } else {
      carry = 0;
    }

    curr = curr.next;
  }
  if (carry) {
    curr.next = new ListNode(carry);
  }
  return dummy.next;
};
