class Node<T = number> {
  next: Node<T> | null = null;

  constructor(public value: T) {}
}

class LinkedList<T> {
  size = 0;
  head: Node | null = null;

  isEmpty() {
    return !!this.size;
  }
}

export {};
