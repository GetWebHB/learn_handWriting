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
    resolve(3000);
  }, 3000);
});

// Promise.all([p1, p2, p3]).then((res) => {
//   console.log(res);
// });

class IPromise {
  static all(promises) {
    const result = [];
    return new Promise((resolve, reject) => {
      promises.forEach((promise, idx) => {
        promise.then((res) => {
          result.push(res);
          if (idx === promises.length - 1) {
            resolve(result);
          }
        });
      });
    });
  }
}

IPromise.all([p1, p2, p3]).then((res) => {
  console.log(res);
});
