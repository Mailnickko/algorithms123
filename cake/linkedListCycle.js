// Check if a linked list has a cycle

const hasCycle = node => {
  if (!node) {
    return false;
  }
  let runner1 = node;
  let runner2 = node;

  while (runner2 && runner2.next) {
    runner1 = runner1.next;
    runner2 = runner2.next.next;

    if (runner1 === runner2) {
      return true;
    }
  }

  return false;
};
