function waysToStep(n: number): number {
  const dp = [0, 1, 2, 4]

  for (let i = 4; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % 1000000007
  }

  return dp[n]
}

console.log(waysToStep(1000000))
