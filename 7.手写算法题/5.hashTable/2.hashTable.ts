class HashTable<T = any> {
  storage: [string, T][][] = []
  private count = 0
  private length = 7

  get loadFactor() {
    return this.count / this.length
  }

  hashFunc(key: string, max: number) {
    let hashCode = 0

    const len = key.length
    for (let i = 0; i < len; i++) {
      hashCode = hashCode * i + key.charCodeAt(i)
    }

    return hashCode % max
  }

  // 更新/删除
  put(key: string, value: T) {
    // 1. 通过hash函数拿到索引
    const index = this.hashFunc(key, this.length)

    // 2.获取桶
    let bucket = this.storage[index]

    // 3.如果未获取到则给一个桶
    if (!bucket) {
      bucket = []
    }

    // 4. 一定可以拿到桶，遍历它，如果存在则进行覆盖操作否则，直接插入
    for (let i = 0; i < bucket.length; i++) {
      const [tupleKey] = bucket[i]
      if (tupleKey === key) {
        bucket[i][1] = value
        return
      }
    }

    // 5. 这里就是增加操作 需要push
    bucket.push([key, value])
    this.storage[index] = bucket
    this.count++
    // 装填因子 > .75 需要扩容 (方便测试填写.7)
    if (this.loadFactor > 0.7) {
      this.resize(this.length * 2)
    }
  }

  // 获取
  get(key: string): T | undefined {
    // 1. 获取下标
    const index = this.hashFunc(key, this.length)
    const bucket = this.storage[index]
    // 2. 如果不存在直接返回
    if (!bucket) return

    // 3. 遍历这个桶，如果值相同直接返回即可
    for (let [tupleKey, tupleValue] of bucket) {
      if (tupleKey === key) {
        return tupleValue
      }
    }
  }

  // 删除
  delete(key: string): T | number {
    const index = this.hashFunc(key, this.length)
    const bucket = this.storage[index]
    if (!bucket) return -1

    for (let i = 0; i < bucket.length; i++) {
      const [tupleKey, tupleValue] = bucket[i]
      if (tupleKey === key) {
        bucket.splice(i, 1)
        this.count--

        //缩容 <0.25 并且长度大于初始值7
        if (this.loadFactor < 0.25 && this.length > 7) {
          this.resize(this.length / 2)
        }

        return tupleValue
      }
    }

    return -1
  }

  // 扩容操作
  resize(length: number) {
    // 重置操作
    const oldStorage = this.storage
    this.storage = []
    this.count = 0
    this.length = length

    for (let bucket of oldStorage) {
      for (let [tupleKey, tupleVal] of bucket || []) {
        // 再hash
        this.put(tupleKey, tupleVal)
      }
    }
  }
}

const hashTable = new HashTable<number>()

hashTable.put('nbc', 65)
hashTable.put('cba', 65)
hashTable.put('xxx', 10)
hashTable.put('ice', 23)
hashTable.put('ice', 24)
hashTable.put('panda', 23)
hashTable.put('quezz', 28)
hashTable.put('juejin', 5)
console.log(hashTable.storage)
// console.log(hashTable.get('ice'))
// console.log(hashTable.get('huanz'))
console.log('-------------')
// console.log(hashTable.delete('ice'))
// console.log(hashTable.delete('panda'))
// console.log(hashTable.storage)
hashTable.delete('ice')
hashTable.delete('quezz')
hashTable.delete('nbc')
hashTable.delete('cba')
hashTable.delete('panda')
hashTable.delete('juejin')
hashTable.delete('xxx')
console.log(hashTable.storage)
