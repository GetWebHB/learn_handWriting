import { cbtPrint } from 'hy-algokit'

class Heap<T> {
  data: T[] = []

  // 交换
  swap(x: number, y: number) {
    let temp = this.data[x]

    this.data[x] = this.data[y]
    this.data[y] = temp
  }

  insert(ele: T) {
    this.heapifyUp(ele)
  }

  // 上滤操作
  heapifyUp(ele: T) {
    this.data.push(ele)

    let index = this.data.length - 1
    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2)
      const flag = this.data[index] > this.data[parentIdx]
      if (!flag) break

      // 如果插入的元素 > 父元素 需要进行上滤操作
      this.swap(index, parentIdx)
      index = parentIdx
    }
  }

  // 提取
  extract() {
    // 1. 第一个值与最后一位交换位置
    this.swap(0, this.data.length - 1)
    // 2. 返回最后一个值
    const top = this.data.pop()

    // // 3.1 根节点与左右节点中最大的节点进行比获取较大的节点的索引
    // // 3.2 如果较大的值，比我根的值大交换位置，否则break

    let index = 0
    // 3.3 有左子节点才需要进行比较
    while (index * 2 + 1 < this.data.length) {
      const leftNodeIndex = index * 2 + 1
      const rightNodeIndex = leftNodeIndex + 1

      let largeIndex = leftNodeIndex
      if (this.data[rightNodeIndex] > this.data[leftNodeIndex]) {
        largeIndex = rightNodeIndex
      }
      if (this.data[index] >= this.data[largeIndex]) break
      this.swap(index, largeIndex)
      index = largeIndex
    }

    return top
  }

  peek() {}

  get size() {
    return this.data.length
  }

  isEmpty() {
    return !this.data.length
  }

  buildHeap(arr: T[]) {
    for (let n of arr) {
      this.insert(n)
    }
  }
}

const heap = new Heap<number>()

// heap.insert(100)
// heap.insert(19)
// heap.insert(35)
// heap.insert(17)
// heap.insert(3)
// heap.insert(25)
// heap.insert(1)
// heap.insert(2)
// heap.insert(7)
// heap.insert(-7)
// heap.insert(10)

heap.buildHeap([19, 3, 6, 34, 56, 123, 3, 85, 22])
cbtPrint(heap.data)

export {}
