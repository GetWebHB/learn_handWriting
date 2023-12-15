import { LinkedList } from './1.LinkedList的循环链表的重构'

class DoubleNode<T = any> {
  next: DoubleNode<T> | null = null
  previous: DoubleNode<T> | null = null

  constructor(public value: T) {}
}

class DoublyLinkedList<T> extends LinkedList<T> {
  head: DoubleNode<T> | null = null
  tail: DoubleNode<T> | null = null

  // 尾部插入
  append(ele: T): void {
    const newNode = new DoubleNode(ele)

    // 头部没值
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      // 尾部插入
      newNode.previous = this.tail
      this.tail!.next = newNode
      this.tail = newNode
    }

    this.size++
  }

  // 头部插入
  preend(ele: T) {
    if (!this.head) {
      this.append(ele)
    } else {
      const newNode = new DoubleNode(ele)
      newNode.next = this.head
      this.head.previous = newNode
      this.head = newNode

      this.size++
    }
  }

  // 反向遍历
  postTraverse() {
    const values: T[] = []

    let current = this.tail

    while (current) {
      values.push(current.value)
      current = current.previous
    }

    return values.join(' -> ')
  }

  insert(position: number, ele: T): boolean {
    if (position < 0 || position > this.size) return false
    // 头部插入
    if (position === 0) {
      this.preend(ele)
    } else if (position === this.size) {
      // 尾部插入
      this.append(ele)
    } else {
      // 中间插入
      const newNode = new DoubleNode(ele)
      const current = this.getNode(position) as DoubleNode

      current.previous!.next = newNode
      newNode.previous = current.previous
      newNode.next = current
      current.previous = newNode

      this.size++
    }

    return true
  }

  removeAt(position: number): T | null {
    if (position < 0 || position >= this.size) return null
    const current = this.getNode(position) as DoubleNode

    if (position === 0) {
      if (this.size === 1) {
        this.head = null
        this.tail = null
      } else {
        this.head = this.head!.next
        this.head!.previous = null
      }
    } else if (position === this.size - 1) {
      current.previous!.next = null
      this.tail = current.previous
    } else {
      current.previous!.next = current.next
      current.next!.previous = current.previous
    }

    this.size--

    return current.value
  }
}

const dLinkedList = new DoublyLinkedList()

dLinkedList.append('ice')
dLinkedList.append('panda')
dLinkedList.append('quezz')
console.log('-----  append -----')
console.log(dLinkedList.traverse())
dLinkedList.preend('xxx')
console.log('-----  preend -----')
console.log(dLinkedList.traverse())
console.log(dLinkedList.postTraverse())
console.log('-----  insert -----')
dLinkedList.insert(0, 'ddd')
dLinkedList.insert(5, 'ggg')
dLinkedList.insert(3, 'icebin')
console.log(dLinkedList.traverse())
console.log('-----  removeAt -----')
console.log(dLinkedList.removeAt(6))
console.log(dLinkedList.removeAt(0))
console.log(dLinkedList.removeAt(2))
console.log(dLinkedList.traverse())
