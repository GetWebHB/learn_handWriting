import Node from './Node'
import { btPrint } from 'hy-algokit'

class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null = null
}

class BSTree<T> {
  root: TreeNode<T> | null = null

  print() {
    btPrint(this.root)
  }

  insertNode(prevNode: TreeNode<T>, newNode: TreeNode<T>) {
    // prevNode > newNode left
    if (prevNode.value > newNode.value) {
      // 如果左节点没有值的话 直接赋值即可
      if (!prevNode.left) {
        prevNode!.left = newNode
      } else {
        // 如果没值，继续往下查找
        this.insertNode(prevNode.left, newNode)
      }
    } else {
      // prevNode < newNode right
      if (!prevNode.right) {
        prevNode.right = newNode
      } else {
        this.insertNode(prevNode.right, newNode)
      }
    }
  }

  insert(val: T) {
    const newNode = new TreeNode(val)
    if (!this.root) {
      this.root = newNode
    } else {
      // 如果存在根的话 需要递归查询位置
      this.insertNode(this.root, newNode)
    }
  }

  // 先序遍历
  preOrderTraverse() {
    this.preOrderTraverseRecur(this.root)
  }

  // 中序遍历
  inOrderTraverse() {
    this.inOrderTraverseRecur(this.root)
  }

  // 后序遍历
  postOrderTraverse() {
    this.postOrderTraverseRecur(this.root)
  }

  // 层序遍历
  levelOredrTraverse() {
    if (!this.root) return
    const queue = [this.root]

    while (queue.length) {
      const top = queue.shift()
      console.log(top!.value)

      top?.left && queue.push(top.left)
      top?.right && queue.push(top.right)
    }
  }

  preOrderTraverseRecur(node: TreeNode<T> | null) {
    if (node) {
      console.log(node.value) // 第一次：根节点
      this.preOrderTraverseRecur(node.left) // 左子树
      this.preOrderTraverseRecur(node.right)
    }
  }

  inOrderTraverseRecur(node: TreeNode<T> | null) {
    if (node) {
      this.inOrderTraverseRecur(node.left)
      console.log(node.value)
      this.inOrderTraverseRecur(node.right)
    }
  }

  postOrderTraverseRecur(node: TreeNode<T> | null) {
    if (node) {
      this.postOrderTraverseRecur(node.left)
      this.postOrderTraverseRecur(node.right)
      console.log(node.value)
    }
  }
}

const bstree = new BSTree<number>()

bstree.insert(11)
bstree.insert(7)
bstree.insert(15)
bstree.insert(5)
bstree.insert(3)
bstree.insert(9)
bstree.insert(8)
bstree.insert(10)
bstree.insert(13)
bstree.insert(12)
bstree.insert(14)
bstree.insert(20)
bstree.insert(18)
bstree.insert(25)
bstree.insert(6)

// bstree.print()
// bstree.preOrderTraverse()
// bstree.inOrderTraverse()
// bstree.postOrderTraverse()
bstree.levelOredrTraverse()
