import { swap } from '../utils/swap'
const arr = [2, 6, 4, 7, 80, 9, 4, 35, 5]

// 如果一轮下来：并没有任何交换就代表它是有序的，直接不进行 break即可

function bubbleSort<T>(arr: T[]) {
  const n = arr.length
  let isSort = true

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        isSort = false
      }
    }
    if (isSort) break
  }

  return arr
}

console.log(bubbleSort<number>(arr))

export {}
