const p1 = new Promise((resolve, reject) => {
  setInterval(() => {
    resolve(1000);
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setInterval(() => {
    resolve(2000);
    // reject("error");
  }, 2000);
});

// Promise.all([p1, p2])
//   .then((res) => {
//     console.log("res:", res); [1000, 2000]
//   })
//   .catch((err) => {
//     console.log("err:", err);
//   });

/* 
  1. Promise.all 首先是一个类方法（静态方法）
  2. 接受含有多个promise的数组
  3. 主动调用then方法，拿到它的结果
*/
