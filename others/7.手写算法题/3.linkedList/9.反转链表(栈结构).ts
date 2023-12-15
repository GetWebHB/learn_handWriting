import { LinkedList } from "./8.LinkedList的update_indexOf_remove方法";

const linkedList = new LinkedList();
linkedList.append("ice");
linkedList.append("panpan");
linkedList.append("que++");
console.log(linkedList.traverse());

function reverseLinkedList(head: any): any {
  const stack: any[] = [];

  let current = head;

  while (current) {
    stack.push(current);
    current = current.next;
  }

  let newHead = stack.pop();
  let stackCurrent = newHead;

  while (stack.length) {
    const newNode = stack.pop();
    stackCurrent.next = newNode;
    stackCurrent = newNode;
  }

  head.next = null;

  return newHead;
}

console.log(reverseLinkedList(linkedList.head));
