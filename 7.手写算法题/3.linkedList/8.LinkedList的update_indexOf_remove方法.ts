class Node<T = any> {
  next: Node<T> | null = null

  constructor(public value: T) {}
}

export class LinkedList<T> {
  size = 0
  head: Node<T> | null = null

  append(ele: T) {
    const newNode = new Node<T>(ele)

    // 如果没有头/那么新创建的就是head
    if (!this.head) {
      this.head = newNode
    } else {
      // 存在head节点
      let current = this.head
      while (current.next) {
        current = current.next
      }
      // 最后一个节点
      current.next = newNode
    }

    this.size++
  }

  insert(position: number, ele: T): boolean {
    if (position < 0 || position > this.size) return false
    let current = this.head
    const newNode = new Node(ele)

    // 插入0的位置
    if (!position) {
      newNode.next = current
      this.head = newNode
      // this.head = newNode;
    } else {
      /*
        中间插入的核心思路：
          0.创建一个新节点
          1.找到postion的元素
          2.newNode.next = post
          3.perv.next = newNode
      */
      const current = this.getNode(position)
      const prev = this.getNode(position - 1)

      prev!.next = newNode
      newNode.next = current
    }

    this.size++

    return true
  }

  removeAt(position: number): T | null {
    if (position < 0 || position >= this.size) return null
    let current = this.head

    if (!position) {
      // 删除head
      this.head = current!.next
    } else {
      const prev = this.getNode(position - 1)
      current = prev!.next
      prev!.next = prev!.next!.next
    }
    this.size--

    return current?.value ?? null
  }

  get(position: number) {
    if (position < 0 || position >= this.size) return false
    const current = this.getNode(position)

    return current?.value
  }

  getNode(position: number) {
    let idx = 0
    let current = this.head

    while (idx++ < position) {
      current = current!.next
    }

    return current
  }

  traverse() {
    const values: T[] = []

    let current = this.head

    while (current) {
      values.push(current.value)
      current = current.next
    }

    return values.join(' -> ')
  }

  update(position: number, value: T) {
    if (position < 0 || position >= this.size) return false
    const current = this.getNode(position)

    current!.value = value
  }

  indexOf(value: T) {
    let idx = 0
    let current = this.head

    while (idx < this.size) {
      if (value === current?.value) {
        return idx
      }

      idx++
      current = current!.next
    }

    return -1
  }

  remove(value: T) {
    const idx = this.indexOf(value)

    if (idx !== -1) {
      return this.removeAt(idx)
    }
  }
}

const linkedList = new LinkedList<string>()

linkedList.append('ice')
linkedList.append('panda')
linkedList.append('quezz')
console.log(linkedList.traverse())
// console.log("------insert------");
// linkedList.insert(0, "zhj");
// linkedList.insert(4, "binbin");
// linkedList.insert(2, "panpan");
// console.log(linkedList.traverse());
// console.log("------removeAt------");
console.log(linkedList.removeAt(0))
console.log(linkedList.removeAt(1))
// linkedList.removeAt(4);
// linkedList.removeAt(2);
console.log(linkedList.traverse())
// console.log(linkedList.get(2));
// console.log(linkedList.get(3));
// console.log("------update------");
// linkedList.update(2, "q");
// console.log(linkedList.traverse());
// console.log("------indexOf------");
// console.log(linkedList.indexOf("q"));
// console.log("------remove------");
// console.log(linkedList.remove("q"));
// console.log(linkedList.traverse());

export {}
