function leastMinutes(n: number): number {
  if (n <= 3) return n

  let time = 1
  while (2 ** time < n) {
    time++
  }

  return time + 1
}

console.log(leastMinutes(3))
console.log(leastMinutes(100000))
