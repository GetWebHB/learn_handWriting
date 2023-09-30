import type { IQueue } from './IQueue'

export class ArrayQueue<T> implements IQueue<T> {
  public queue: T[] = []

  enqueue(ele: T) {
    this.queue.push(ele)
  }

  dequeue() {
    return this.queue.shift()
  }

  front() {
    return this.queue[0]
  }

  isEmpty() {
    return this.queue.length === 0
  }

  size() {
    return this.queue.length
  }
}

const queue = new ArrayQueue<number>()

// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);

// console.log(queue);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.front());
// console.log(queue.size());
// console.log(queue.isEmpty());
// console.log(queue.dequeue());
// console.log(queue.isEmpty());

export default ArrayQueue
