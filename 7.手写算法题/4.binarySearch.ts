function binarySearch(arr: number[], n) {
  let center = Math.floor((arr.length - 1) / 2); // 4
  let left = 0;
  let right = arr.length - 1;

  // 如果没找找到该值就一直查找
  while (arr[center] !== n) {
    if (arr[center] > n) {
      right = center;
    } else if (arr[center] < n) {
      left = center;
    } else {
      return center;
    }
  }
}

binarySearch([1, 5, 34, 44, 77, 88, 786, 1000], 44);
