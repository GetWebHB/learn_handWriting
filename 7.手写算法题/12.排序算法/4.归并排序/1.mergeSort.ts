import { measureSort } from 'hy-algokit'
import testAlgoSortFn from '../utils/testAlgoSortFn'

function mergeSort(arr: number[]) {
  // 1. 切割
  if (arr.length <= 1) return arr
  // 获取中间值
  const mid = Math.floor(arr.length / 2)

  // 拆分左边
  const leftArr = arr.slice(0, mid)
  // 拆分右边
  const rightArr = arr.slice(mid)

  // 递归进行拆解，把他们拆解成一个一个子数组
  const leftNewArr = mergeSort(leftArr)
  const rightNewArr = mergeSort(rightArr)

  // 2. 合并
  const newArr: number[] = []

  let i = 0
  let j = 0

  while (i < leftNewArr.length && j < rightNewArr.length) {
    if (leftNewArr[i] <= rightNewArr[j]) {
      newArr.push(leftNewArr[i])
      i++
    } else {
      newArr.push(rightNewArr[j])
      j++
    }
  }

  // 如果i没有遍历完
  if (i < leftNewArr.length) {
    newArr.push(...leftNewArr.slice(i))
  }

  if (j < rightNewArr.length) {
    newArr.push(...rightNewArr.slice(j))
  }

  // console.log(newArr)

  return newArr
}

testAlgoSortFn(mergeSort)
// console.log(mergeSort([7, 3, 2, 16, 24, 4, 11, 9]))

measureSort(mergeSort)