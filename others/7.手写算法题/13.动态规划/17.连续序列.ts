function maxSubArray(nums: number[]): number {
  const dp = [nums[0]]
  const n = nums.length

  // 核心思路： dp[i] max(dp[i - 1], nums[i])
  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
  }

  return Math.max(...dp)
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
