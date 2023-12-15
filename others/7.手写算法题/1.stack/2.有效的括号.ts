function isValid(s: string): boolean {
  if (s.length % 2 !== 0) return false;

  const stack: string[] = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let n of s) {
    // 左括号
    if (Object.keys(map).includes(n)) {
      stack.push(map[n]);
    } else {
      const top = stack.pop();
      if (top !== n) return false;
    }
  }

  return !stack.length;
}
