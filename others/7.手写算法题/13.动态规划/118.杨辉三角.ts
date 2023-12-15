function generate(numRows: number): number[][] {
  const dp = [[1], [1, 1]]
  // 第一项/第二项特殊处理
  if (numRows === 1) return [dp[numRows - 1]]
  if (numRows === 2) return dp

  for (let i = 2; i < numRows; i++) {
    const arr = [1]
    const prevs = dp[i - 1]
    for (let j = 0; j < prevs.length - 1; j++) {
      arr.push(prevs[j] + prevs[j + 1])
    }
    arr.push(1)
    dp[i] = arr
  }

  return dp
}

console.log(generate(1))
console.log(generate(2))
console.log(generate(3))
console.log(generate(5))
console.log(generate(6))
