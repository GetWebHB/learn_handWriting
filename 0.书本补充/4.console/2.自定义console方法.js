// 重写 console方法
// ["log", "warn", "info", "error"].forEach((item) => {
//   console[item] = console[item].bind(console, new Date().valueOf());
// });

// console.log("xxxx");

// 查看程序运行时间

console.time("start:");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("start:");
