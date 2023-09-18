import Node from './Node'
import { btPrint } from 'hy-algokit'

class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null = null
  parent: TreeNode<T> | null = null

  get isLeft() {
    return !!(this.parent && this.parent.left === this)
  }

  get isRight() {
    return !!(this.parent && this.parent.right === this)
  }
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

  // 最大
  getMaxValue(): T | null {
    if (!this.root) return null
    let current = this.root

    while (current.right) {
      current = current.right
    }

    return current.value
  }

  // 最小
  getMinValue() {
    if (!this.root) return null
    let current = this.root

    while (current.left) {
      current = current.left
    }

    return current.value
  }

  // 搜索某个值
  serchValue(val: T): boolean {
    return !!this.serchNode(val)
  }

  // currentNode/parentNode
  serchNode(val: T): TreeNode<T> | null {
    if (!this.root) return null

    let current: TreeNode<T> | null = this.root
    let parent: TreeNode<T> | null = null

    while (current) {
      // 如果值相等，直接break
      if (current.value === val) break

      parent = current
      if (current.value < val) {
        current = current.right
      } else {
        current = current.left
      }
    }

    if (current) {
      current!.parent = parent
    }

    return current
  }

  getSuccessor(delNode: TreeNode<T>): TreeNode<T> {
    let current = delNode!.right
    let successor: TreeNode<T> | null = null

    while (current) {
      successor = current
      current = current!.left
      if (current) { // 没搞懂 待处理
        current.parent = successor
      }
    }

    // 左右子树上移的情况
    if (delNode.right !== successor) {
      // 后继节点后面还有值的情况
      successor!.parent!.left = successor?.right ?? null // 没搞懂 待处理
      successor!.right = delNode.right
    }
    successor!.left = delNode.left

    return successor!
  }

  // 删除方法
  remove(val: T) {
    // 1. 没有节点的情况
    if (!this.root) return false

    // 获取当前被删除的节点
    const cur = this.serchNode(val)

    // 2. 删除叶子节点 （节点度为0的）
    if (!cur?.left && !cur?.right) {
      // 2.1 如果是根节点
      if (cur === this.root) {
        this.root = null
      }
      // 2.2 删除的节点是左节点
      else if (cur?.isLeft) {
        cur.parent!.left = null
      }
      // 2.3 删除的节点是右节点
      else {
        cur!.parent!.right = null
      }
    }
    // 3. 有一个左子节点
    else if (!cur.right) {
      // 3.1 如果是根节点
      if (cur === this.root) {
        this.root = cur.left
      }
      // 3.2 删除的左子节点
      else if (cur.isLeft) {
        cur.parent!.left = cur.left
      }
      // 3.3 删除的右子节点
      else {
        cur.parent!.right = cur.left
      }
    }
    // 4. 有一个右子节点
    else if (!cur.left) {
      // 4.1 如果是根节点
      if (cur === this.root) {
        this.root = cur.right
      }
      // 4.2 删除的是左子节点
      else if (cur.isLeft) {
        cur.parent!.left = cur.right
      } else {
        cur.parent!.right = cur.right
      }
      // 4.3 删除的是右子节点
    }
    // 5. 有两个子节点
    else {
      // 5.1 找到后继节点
      const successor = this.getSuccessor(cur)

      if (cur === this.root) {
        this.root = successor
      } else if (cur.isLeft) {
        cur.parent!.left = successor
      } else {
        cur.parent!.right = successor
      }
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
// bstree.levelOredrTraverse()
// bstree.print()
// console.log(bstree.getMaxValue())
// console.log(bstree.getMinValue())

// console.log(bstree.serchValue(11))
// console.log(bstree.serchValue(3))
// console.log(bstree.serchValue(100))

// bstree.remove(10)
// bstree.remove(11)
// bstree.remove(13)

bstree.remove(3)
bstree.remove(8)
bstree.remove(25)
bstree.print()
bstree.remove(5)
bstree.remove(20)
bstree.print()
// bstree.remove(7)
bstree.remove(11)
bstree.print()
