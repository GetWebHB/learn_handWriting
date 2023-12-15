function maxSales(sales: number[]): number {
  const dp = [sales[0]]

  for (let i = 1; i < sales.length; i++) {
    dp[i] = Math.max(dp[i - 1] + sales[i], sales[i])
  }

  return Math.max(...dp)
}
