function maxProfit(prices: number[]): number {
  const n = prices.length
  const dp = [0]
  let minVal = prices[0]

  for (let i = 1; i < n; i++) {
    dp[i] = prices[i] - minVal
    minVal = Math.min(minVal, prices[i])
  }

  console.log(dp)

  return Math.max(...dp)
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))

export {}