import { measureSort } from 'hy-algokit'
import { swap } from '../utils/swap'
import testAlgoSortFn from '../utils/testAlgoSortFn'

/*
  核心思路：
    指定的数组 -> 牌堆
    拿出数组中第一个元素（假设它是最小的）
    从数组中拿第二个值，与最小值数组进行比较
    如果比Min数组还小，那么就进行后移操作
    最后找到的位置 就是该数组的位置
*/

function insertionSort(arr: number[]) {
  const n = arr.length

  for (let i = 1; i < n; i++) {
    const newCard = arr[i]
    let j = i - 1

    while (arr[j] > newCard && j >= 0) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = newCard
  }

  return arr
}

// testAlgoSortFn(insertionSort)
measureSort(insertionSort)