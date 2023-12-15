function sequenceSearch(arr: number[], n: number) {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item === n) return i;
  }

  return -1;
}

console.log(sequenceSearch([2, 5, 7, 34, 67, 335, 787, 5443], 335));
