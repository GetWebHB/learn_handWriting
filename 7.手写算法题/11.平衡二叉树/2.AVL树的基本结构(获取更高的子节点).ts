import Node from '../6.二叉搜索树BSTree/Node'
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

  // 每个节点的高度
  private getHeight(): number {
    const leftHeight = this.left ? this.left.getHeight() : 0
    const rightHeight = this.right ? this.right.getHeight() : 0

    return Math.max(leftHeight, rightHeight) + 1
  }

  // 获取平衡因子
  private getBalanceFactor() {
    const leftHeight = this.left ? this.left.getHeight() : 0
    const rightHeight = this.right ? this.right.getHeight() : 0

    return leftHeight - rightHeight
  }

  // 是否平衡
  get isBalance() {
    return Math.abs(this.getBalanceFactor()) <= 1
  }

  higherChild() {
    const leftHeight = this.left ? this.left.getHeight() : 0
    const rightHeight = this.right ? this.right.getHeight() : 0

    if (leftHeight > rightHeight) return this.left
    if (leftHeight < rightHeight) return this.right
    return this.isLeft ? this.left : this.right
  }
}

class AVLTree<T> {
  root: TreeNode<T> | null = null
}

const n1 = new TreeNode(15)
const n2 = new TreeNode(20)
const n3 = new TreeNode(30)
n1.left = n2
n2.left = n3

btPrint(n1)
console.log(n1.isBalance)
console.log(n1.left.isBalance)
console.log(n1.higherChild()?.value)
