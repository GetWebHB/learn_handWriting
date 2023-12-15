const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1000);
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(500);
  }, 500);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(3000);
  }, 3000);
});

// Promise.race([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

class IPromise {
  static race(promises) {
    return new Promise((resolve, reject) => {
      for (let promise of promises) {
        promise.then(resolve).catch(reject);
      }
    });
  }
}

IPromise.race([p1, p2, p3])
  .then((res) => {
    console.log("res:", res);
  })
  .catch((err) => {
    console.log("err:", err);
  });
