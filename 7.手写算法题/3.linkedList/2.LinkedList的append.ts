class Node<T = any> {
  next: Node<T> | null = null;

  constructor(public value: T) {}
}

class LinkedList<T> {
  size = 0;
  head: Node | null = null;

  append(ele: T) {
    const newNode = new Node<T>(ele);

    // 如果没有头/那么新创建的就是head
    if (!this.head) {
      this.head = newNode;
    } else {
      // 存在head节点
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      // 最后一个节点
      current.next = newNode;
    }

    this.size++;
  }
}

const linkedList = new LinkedList<string>();
linkedList.append("ice");
linkedList.append("panda");
linkedList.append("quezz");

export {};
