// Find the second largest node in a BST

const Node = val => {
  this.value = val;
  this.next = null;
};

const findLargestNode = rootNode => {
  let current = rootNode;

  while (current) {
    if (!current.right) {
      return current.value;
    }
    current = current.right;
  }
};

const findSecondLargest = rootNode => {
  if (!rootNode || (!rootNode.left && !rootNode.right)) {
    throw new Error('BST must contain at least 2 nodes');
  }

  let current = rootNode;

  while (current) {
    if (current.left && !current.right) {
      return findLargestNode(current.left);
    }

    if (current.right && !current.right.left && !current.left.right) {
      return current.value;
    }
    current = current.right;
  }
};
