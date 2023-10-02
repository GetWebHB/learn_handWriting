import { swap } from '../utils/swap'

/*
  找到最值，放到起始位置，这样就找到了一个 直到找完位置
*/
export function selectionSort(arr: number[]) {
  const n = arr.length
  // (n - 1) 因为找到最后，那个值就已经是最值了
  for (let i = 0; i < n - 1; i++) {
    let minIndex = 0
    for (let j = 0; j < n; j++) {
      if (arr[j] < arr[j + 1]) minIndex = j + 1
    }

    swap()
  }

  return arr
}
