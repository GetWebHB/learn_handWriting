import { LinkedList } from './11.LinkedList的循环链表的重构'

class CirculerLinkedList<T> extends LinkedList<T> {
  append(ele: T): void {
    super.append(ele)
    this.tail!.next = this.head
  }

  insert(position: number, ele: T) {
    const isSuccess = super.insert(position, ele)
    if (!isSuccess) return false
    // 如果插入成功
    if (isSuccess && (position === 0 || position === this.size - 1)) {
      this.tail!.next = this.head
    }
    return true
  }

  removeAt(position: number): T | null {
    const ele = super.removeAt(position)
    if (!ele) return null

    if (ele && (position === 0 || position === this.size)) {
      this.tail!.next = this.head
    }

    return ele
  }
}

const cLinkedList = new CirculerLinkedList()

cLinkedList.append('ice')
cLinkedList.append('panda')
cLinkedList.append('quezz')
cLinkedList.insert(3, 'hhh')
console.log(cLinkedList.traverse())
console.log(cLinkedList.removeAt(3))
console.log(cLinkedList.traverse())
console.log(cLinkedList.indexOf("ice"))
console.log(cLinkedList.indexOf("quezz"))