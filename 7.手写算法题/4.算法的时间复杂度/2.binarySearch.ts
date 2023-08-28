function binarySearch(arr: number[], n: number) {
  let left = 0;
  let right = arr.length;

  while (left !== right) {
    let idx = Math.floor((left + right) / 2);
    if (arr[idx] > n) {
      right = idx;
    } else if (arr[idx] < n) {
      left = idx;
    } else {
      return idx;
    }
  }

  return -1;
}

console.log(binarySearch([1, 5, 34, 44, 77, 88, 786, 1000], 5));
