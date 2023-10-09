function countBits(n: number): number[] {
  const dp = [0]

  for (let i = 1; i <= n; i++) {
    const sum = numToBinary(i).filter((item) => item === 1).length
    dp[i] = sum
  }

  // 先模 在/2
  function numToBinary(n: number) {
    const stack: number[] = []

    while (n > 0) {
      stack.push(n % 2)
      n = Math.floor(n / 2)
    }
    return stack
  }

  return dp
}
console.log(countBits(5))
console.log(countBits(2))
// console.log(countBits(10))
