const arr = [2, 6, 4, 7, 9, 4, 35, 5, 80]

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      const tem = arr[i]
      arr[i] = arr[j]
      arr[j] = tem
    }
  }
}

console.log(arr)