function isPrimeNum(num: number): boolean {
  if (num === 1) return false

  // 只能被自身和1整除的数
  const sort = Math.sqrt(num)
  for (let i = 2; i <= sort; i++) {
    if (num % i === 0) return false
  }

  return true
}

console.log(isPrimeNum(11))
console.log(isPrimeNum(2))
console.log(isPrimeNum(1))
console.log(isPrimeNum(3))
console.log(isPrimeNum(33))
console.log(isPrimeNum(4))
console.log(isPrimeNum(6))
console.log(isPrimeNum(8))
