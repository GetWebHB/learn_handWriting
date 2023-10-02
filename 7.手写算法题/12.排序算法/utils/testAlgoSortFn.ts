function isSorted(arr: number[]) {
  let isSort = true
  const n = arr.length

  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      isSort = false
    }
  }

  return isSort
}

function testAlgoSortFn<T>(fn: (arr: number[]) => number[]) {
  // 随机10个1-199的数字
  const arr = Array.from(
    {
      length: 10,
    },
    () => Math.floor(Math.random() * 200)
  )
  console.log('排序前:', arr)
  const sortArr = fn(arr)
  console.log('排序后:', sortArr)
  console.log('排序是否正确：', isSorted(sortArr))

  return sortArr
}

export default testAlgoSortFn
