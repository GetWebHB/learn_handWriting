class Heap<T> {
  data: T[] = []
  private length: number = 0
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
    this.length++

    let index = this.length - 1
    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2)
      const flag = this.data[index] > this.data[parentIdx]
      if (!flag) break

      // 如果插入的元素 > 父元素 需要进行上滤操作
      this.swap(index, parentIdx)
      index = parentIdx
    }
  }

  extract() {}

  peek() {}

  get size() {
    return this.length
  }

  isEmpty() {
    return !this.length
  }

  buildHeap() {}
}

const heap = new Heap<number>()

heap.insert(40)
heap.insert(30)
heap.insert(35)
heap.insert(20)
heap.insert(50)
heap.insert(21)
heap.insert(20)

console.log(heap.data)

export {}