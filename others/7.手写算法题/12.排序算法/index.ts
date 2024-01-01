import testAlgoSortFn from './utils/testAlgoSortFn'
import { swap } from './utils/swap'

// 1. 冒泡排序
// function bubbleSort(arr: number[]) {
//   const n = arr.length
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - 1 - i; j++) {
//       // 一轮结束 最大值一定在最后
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1)
//       }
//     }
//   }
//   return arr
// }
// console.log(testAlgoSortFn(bubbleSort))

// 2. 选择排序
// function selectionSort(arr: number[]) {
//   const n = arr.length

//   for (let i = 0; i < n; i++) {
//     let minIdx = i
//     for (let j = i + 1; j < n; j++) {
//       if (arr[minIdx] > arr[j]) {
//         minIdx = j
//       }
//     }
//     if (minIdx !== i) {
//       swap(arr, minIdx, i)
//     }
//   }

//   return arr
// }
// console.log(testAlgoSortFn(selectionSort))

// 3. 插入排序
// function insertionSort(arr: number[]) {
//   const n = arr.length
//   const sorted = [arr[0]]

//   for (let i = 1; i < n; i++) {
//     let idx = sorted.length
//     for (let j = sorted.length - 1; j >= 0; j--) {
//       if (sorted[j] > arr[i]) {
//         sorted[j + 1] = sorted[j]
//         idx = j
//       }
//     }
//     sorted[idx] = arr[i]
//   }

//   return sorted
// }
// console.log(testAlgoSortFn(insertionSort))

// 4. 归并排序
function mergeSort(arr: number[]) {
  return arr
}

// 5. 快速排序
function quickSort(arr: number[]) {
  return arr
}
