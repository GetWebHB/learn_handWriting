function hashFunc(key: string, max: number) {
  let hashCode = 0

  const len = key.length
  for (let i = 0; i < len; i++) {
    hashCode = hashCode * i + key.charCodeAt(i)
  }

  return hashCode % max
}
