function binarySearch(arr: number[], n: number) {
  let left = 0;
  let right = arr.length - 1;

  while (left !== right) {
    let idx = Math.floor((left + right) / 2);
    const val = arr[idx];
    if (val > n) {
      right = idx;
    } else if (val < n) {
      left = idx;
    } else {
      return idx;
    }
  }

  return -1;
}

console.log(binarySearch([1, 5, 34, 44, 77, 88, 786, 1000], 5));
