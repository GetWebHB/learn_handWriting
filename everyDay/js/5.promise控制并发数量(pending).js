pMap([1, 2, 3, 4, 5], (x) => Promise.resolve(x + 1))

pMap([Promise.resolve(1), Promise.resolve(2)], (x) => x + 1)

// 注意输出时间控制
pMap([1, 1, 1, 1, 1, 1, 1, 1], (x) => sleep(1000), { concurrency: 2 })
