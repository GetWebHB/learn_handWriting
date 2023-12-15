import { swap } from '../utils/swap'
const arr = [100,2, 6, 4, 7, 80, 9, 4, 35, 5]

function bubbleSort<T>(arr: T[]) {
  const n = arr.length

  // 一轮结束：可以找到一个最大值排到最后 （n - 1 最后一轮可以省略 因此省略最后一轮）
  for (let i = 0; i < n - 1; i++) {
    // 两两比较，交换位置
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }

  return arr
}

console.log(bubbleSort<number>(arr))

export {}
