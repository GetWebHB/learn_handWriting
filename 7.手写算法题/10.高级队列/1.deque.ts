import { ArrayQueue } from '../2.queue/1.ArrayQueue'

// 相当于头尾栈结构
class Deque<T> extends ArrayQueue<T> {
  // 头部入队
  insertFront(ele: T) {
    this.queue.unshift(ele)
  }
  // 尾部出队
  deleteLast() {
    this.queue.pop()
  }
}

const deque = new Deque<number>()

deque.insertFront(1)
deque.insertFront(2)
deque.insertFront(3)
deque.deleteLast()
console.log(deque.queue)