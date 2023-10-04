import { measureSort } from 'hy-algokit'
import testAlgoSortFn from '../utils/testAlgoSortFn'
import { swap } from '../utils/swap'

// 核心逻辑： 找pivot基准 双指针 左边找大的 右边找小的
function quickSort(arr: number[]): number[] {
  partition(0, arr.length - 1)

  function partition(left: number, right: number) {
    if (left >= right) return
    const pivot = arr[right] // 轴心 基准元素

    let i = left
    let j = right - 1

    while (i <= j) {
      // < pivot
      while (arr[i] < pivot) {
        i++
      }

      // > pivot
      while (arr[j] > pivot) {
        j--
      }

      // 这里直接交换即可
      if (i <= j) {
        swap(arr, i, j)
        i++
        j--
      }
    }
    swap(arr, i, right)
    // 左边
    partition(left, i - 1)
    // 右边
    partition(i + 1, right)
  }

  return arr
}

// testAlgoSortFn(quickSort)
measureSort(quickSort)
