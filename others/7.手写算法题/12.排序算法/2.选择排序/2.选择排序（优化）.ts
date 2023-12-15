import { measureSort } from 'hy-algokit'
import { swap } from '../utils/swap'
import testAlgoSortFn from '../utils/testAlgoSortFn'

/*
  找到最值，放到起始位置，这样就找到了一个 直到找完位置
*/
function selectionSort(arr: number[]) {
  const n = arr.length

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < n; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }

    // 如果当前值就是最小值那么我们不进行交换
    if (i !== minIndex) swap(arr, i, minIndex)
  }

  return arr
}

// testAlgoSortFn(selectionSort)

measureSort(selectionSort)
