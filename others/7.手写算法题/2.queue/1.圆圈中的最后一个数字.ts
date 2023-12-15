function circleLastNum(n: number, m: number) {
  const queue: number[] = [];

  for (let i = 0; i < n; i++) {
    queue.push(i);
  }

  while (queue.length > 1) {
    // 只处理需要入队在出队的人
    for (let i = 1; i < m; i++) {
      queue.push(queue.shift()!);
    }

    queue.shift();
  }

  return queue[0];
}

// console.log(circleLastNum(5, 3));
// console.log(circleLastNum(10, 17));
console.log(circleLastNum(100000, 1000000));
