function maxSubArray(nums: number[]): number {
  let prev = nums[0]
  let current = prev

  for (let i = 1; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i])
    current = Math.max(prev, current)
  }

  return current
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSubArray([5, 4, -1, 7, 8]))

export {}
