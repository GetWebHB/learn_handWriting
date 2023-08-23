function numToBinary(num: number) {
  const stack: number[] = [];
  let str = "";

  while (num > 0) {
    stack.push(num % 2);
    num = Math.floor(num / 2);
  }

  while (stack.length) {
    str += stack.pop();
  }

  return str;
}

console.log(numToBinary(30));
