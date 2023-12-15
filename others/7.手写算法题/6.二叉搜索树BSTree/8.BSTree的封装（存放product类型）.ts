import Node from './Node'
import { btPrint, PrintableNode } from 'hy-algokit'

class TreeNode<T> extends Node<T> implements PrintableNode {
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null = null

  // get value() {
  //   const pro = this.value as Product
  //   return `${pro.name}-${pro.price}`
  // }
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
}

class Product {
  constructor(public name: string, public price: number) {}

  valueOf() {
    return this.price
  }

  get value() {
    return `${this.name}-${this.price}`
  }
}

const bstree = new BSTree<Product>()

bstree.insert(new Product('oppe', 666))
bstree.insert(new Product('huawei', 1999))
bstree.insert(new Product('apple', 999))
bstree.insert(new Product('vivo', 888))
bstree.insert(new Product('ry', 444))

bstree.print()
