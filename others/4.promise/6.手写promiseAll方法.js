const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1000);
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2000);
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(3000);
  }, 3000);
});

// Promise.all([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log("error:", e);
//   });

class IPromise {
  static all(promises) {
    const result = [];
    let count = 0;
    return new Promise((resolve, reject) => {
      promises.forEach((promise, idx) => {
        promise
          .then((res) => {
            count++;
            result.push(res);
            if (count === length) {
              resolve(result);
            }
          })
          .catch((e) => {
            reject(e);
          });
      });
    });
  }
}

IPromise.all([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((e) => console.log("err:", e));
