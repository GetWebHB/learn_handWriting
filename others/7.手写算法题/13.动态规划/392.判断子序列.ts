function isSubsequence(s: string, t: string): boolean {
  if (!s) return true
  const firstIdx = t.indexOf(s[0])
  if (firstIdx === -1) return false

  let current = firstIdx + 1

  for (let i = 1; i < s.length; i++) {
    let flag = true

    while (current && flag && current < t.length) {
      const exists = s[i] === t[current]
      if (exists) {
        flag = false
      }
      current++
    }

    if (flag) return false
  }

  return true
}

// console.log(isSubsequence('azc', 'ahbgdc'))
// console.log(isSubsequence('abc', 'ahbgdc'))
// console.log(isSubsequence('aaaaaa', 'bbaaaa'))
console.log(isSubsequence('aaaaaa', 'bbaaaa'))
