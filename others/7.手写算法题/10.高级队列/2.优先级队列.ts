import { cbtPrint } from 'hy-algokit'
import { Heap } from '../9.heap堆/7.heap的最大堆_最小堆的封装'

class PNode {
  constructor(public name: string, public age: number) {}

  valueOf() {
    return this.age
  }
}

class PriorityQueue<T> extends Heap<T> {
  enqueue(name: string, age: number) {
    const p = new PNode(name, age)
    this.insert(p as T)
  }

  dequeue() {
    return this.extract()
  }

  peek(): T | undefined {
    return this.data[0]
  }

  isEmpty(): boolean {
    return !this.data.length
  }

  get size(): number {
    return this.data.length
  }
}

const p = new PriorityQueue<PNode>()

p.enqueue('ice', 23)
p.enqueue('panda', 24)
p.enqueue('quezz', 99)

while (!p.isEmpty()) {
  console.log(p.dequeue())
}
