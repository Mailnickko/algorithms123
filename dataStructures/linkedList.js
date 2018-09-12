// Implement linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(initVal) {
    this.head = typeof initVal === 'number' ? new Node(initVal) : null;
    this.tail = this.head;
  }

  addToHead(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  addToTail(val) {
    const newNode = new Node(val);
    if (this.head) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = this.tail = newNode;
    }
  }

  contains(target, keepCount) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (current.value === target) {
        return keepCount ? count : true;
      }
      count++;
      current = current.next;
    }
    return keepCount ? -1 : false;
  }

  indexOf(target) {
    return this.contains(target, true);
  }

  insertAfter(node, val) {
    const newNode = new Node(val);
    let current = this.head;
    while (current) {
      if (current.value === node.value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }

  removeAfter(node) {
    let current = this.head;
    while (current) {
      if (current === this.tail) {
        return;
      } else if (current.value === node.value) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  reverse() {
    let current = this.head;
    let prev = null;

    while (current) {
      if (prev === null) {
        this.tail = current;
      }
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  makeListRange(from, to) {
    for (let i = from; from <= to; from++) {
      this.addToTail(from);
    }
    return this;
  }
}

module.exports = LinkedList;
