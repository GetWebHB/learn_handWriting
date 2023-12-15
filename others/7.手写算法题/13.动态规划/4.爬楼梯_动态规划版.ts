function climbStairs(n: number): number {
  // 1. 设置初始化状态
  const dp = [1, 1]

  for (let i = 2; i <= n; i++) {
    // 2. 状态转移方程
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
}

console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(4))
console.log(climbStairs(5))

export {}
