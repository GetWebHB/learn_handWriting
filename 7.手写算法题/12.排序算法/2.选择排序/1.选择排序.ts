import { swap } from '../utils/swap'
import testAlgoSortFn from '../utils/testAlgoSortFn'

/*
  找到最值，放到起始位置，这样就找到了一个 直到找完位置
*/
function selectionSort(arr: number[]) {
  const n = arr.length

  // (n - 1) 因为找到最后，那个值就已经是最值了
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < n; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }

    swap(arr, i, minIndex)
  }

  return arr
}

testAlgoSortFn(selectionSort)
