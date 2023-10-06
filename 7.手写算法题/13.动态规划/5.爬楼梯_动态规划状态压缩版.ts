function climbStairs(n: number): number {
  // 1. 设置初始化状态
  let prev = 1
  let cur = 1

  for (let i = 2; i <= n; i++) {
    // 2. 状态转移方程
    const newVal = prev + cur
    prev = cur
    cur = newVal
  }

  return cur
}

console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(4))
console.log(climbStairs(5))

export {}
