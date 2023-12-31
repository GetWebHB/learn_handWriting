function maxSubArray(nums: number[]): number {
  const dp = [nums[0]]

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
  }

  return Math.max(...dp)
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
maxSubArray([5, 4, -1, 7, 8])

export {}
