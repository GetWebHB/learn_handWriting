import { LinkedList } from "./8.LinkedList的update_indexOf_remove方法";

const linkedList = new LinkedList();
linkedList.append("ice");
linkedList.append("panpan");
linkedList.append("que++");
console.log(linkedList.traverse());

// function reverseLinkedList({ head }: any) {
//   /*
//     核心思路：
//       1. 先拿到head.next节点（可以反转head节点）
//       2. head.next节点就可以等于newNode（null）
//       3. newNode = current

//   */
//   if (!head || !head.next) return head;

//   let newHead = null;

//   while (head) {
//     let current = head.next;
//     head.next = newHead;
//     newHead = head;
//     head = current;
//   }

//   return newHead;
// }
// console.log(reverseLinkedList(linkedList));

function reverseLinkedList(head: any): any {
  if (!head || !head.next) return head;

  const newHead = reverseLinkedList(head.next ?? null);
  // 这里操作，相当于倒数第二个节点

  head.next.next = head;
  head.next = null;

  return newHead;
}

reverseLinkedList(linkedList.head);
