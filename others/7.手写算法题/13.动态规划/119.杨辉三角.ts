//  11 ** x 刚好就是它的值
function getRow(rowIndex: number): number[] {
  const dp = [[1], [1, 1]]
  // 第一项/第二项特殊处理
  if (rowIndex <= 1) return dp[rowIndex]

  for (let i = 2; i <= rowIndex; i++) {
    const arr = [1]
    const prevs = dp[i - 1]
    for (let j = 0; j < prevs.length - 1; j++) {
      arr.push(prevs[j] + prevs[j + 1])
    }
    arr.push(1)
    dp[i] = arr
  }

  return dp[rowIndex]
}

console.log(getRow(1))
console.log(getRow(2))
console.log(getRow(3))
console.log(getRow(5))
