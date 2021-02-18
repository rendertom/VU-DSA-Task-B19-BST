class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value);
  }

  contains(value) {
    return !!this.find(value);
  }

  find(value) {
    let node = this.root;
    while (node) {
      if (value === node.value) {
        return node;
      } else if (value < node.value) {
        node = node.left;
      } else if (value > node.value) {
        node = node.right;
      }
    }

    return null;
  }

  findMax() {
    let node = this.root;
    while (node.right) {
      node = node.right;
    }
    return node;
  }

  findMin() {
    let node = this.root;
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  insert(value) {
    let newNode = new Node(value);

    const searchTree = (node) => {
      if (value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          searchTree(node.left);
        }
      } else if (value > node.value) {
        if (!node.right) {
          node.right = newNode;
        } else {
          searchTree(node.right);
        }
      }
    };

    searchTree(this.root);

    return newNode;
  }

  remove(value) {
    const removeNode = function (node, value) {
      if (node == null) {
        return null;
      }
      if (value === node.value) {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          return node.right;
        }
        if (!node.right) {
          return node.left;
        }

        let tempNode = node.right;
        while (tempNode.left) {
          tempNode = tempNode.left;
        }

        node.value = tempNode.value;
        node.right = removeNode(node.right, tempNode.value);
      } else if (value < node.value) {
        node.left = removeNode(node.left, value);
      } else if (value > node.value) {
        node.right = removeNode(node.right, value);
      }
      return node;
    };

    removeNode(this.root, value);
  }

  bfs() {
    let result = [];
    let queue = [];
    queue.push(this.root);
    while (queue.length > 0) {
      let node = queue.shift();

      result.push(node.value);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    return result;
  }

  dfsInOrder() {
    let result = [];

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }

      result.push(node.value);

      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);
    return result;
  }

  dfsPreOrder() {
    let result = [];

    const traverse = (node) => {
      result.push(node.value);

      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);
    return result;
  }

  dfsPostOrder() {
    let result = [];

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }

      result.push(node.value);
    };

    traverse(this.root);
    return result;
  }
}

module.exports = BST;
