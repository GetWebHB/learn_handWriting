function fib(n: number): number {
  if (n <= 1) return n

  let prev = 0
  let cur = 1
  const MAX = 1000000007

  for (let i = 2; i <= n; i++) {
    const newVal = prev + cur
    prev = cur
    // 只需要模cur 因为cur拿到了代表前面的值已经拿到了
    cur = newVal % MAX
  }

  return cur
}

console.log(fib(100))
