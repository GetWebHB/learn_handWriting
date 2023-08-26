class Node<T = any> {
  next: Node<T> | null = null;

  constructor(public value: T) {}
}

class LinkedList<T> {
  size = 0;
  head: Node<T> | null = null;

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

  insert(position: number, ele: T): boolean {
    if (position < 0 || position > this.size) return false;
    let current = this.head;
    const newNode = new Node(ele);

    // 插入0的位置
    if (position === 0) {
      newNode.next = current;
      this.head = newNode;
      // this.head = newNode;
    } else {
      /*
        中间插入的核心思路：
          0.创建一个新节点
          1.找到postion的元素
          2.newNode.next = post
          3.perv.next = newNode
      */
      let idx = 0;
      let perv: Node | null = null;

      while (idx++ < position) {
        perv = current;
        current = current!.next;
      }

      // 拿到了 perv ｜ current
      perv!.next = newNode;
      newNode.next = current;
    }

    this.size++;

    return true;
  }

  traverse() {
    const values: T[] = [];

    let current = this.head;

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    return values.join(" -> ");
  }
}

const linkedList = new LinkedList<string>();

linkedList.append("ice");
linkedList.append("panda");
linkedList.append("quezz");
console.log(linkedList.traverse());
console.log("------insert------");
linkedList.insert(0, "zhj");
linkedList.insert(4, "binbin");
linkedList.insert(2, "panpan");
console.log(linkedList.traverse());

export {};
