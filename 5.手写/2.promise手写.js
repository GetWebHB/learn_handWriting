const p1 = new Promise((resolve, reject) => {
  setInterval(() => {
    resolve(1000);
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setInterval(() => {
    resolve(2000);
    // reject("error");
  }, 1000);
});

class IPromise {
  static all(promises) {
    const result = [];
    let count = 0;
    const len = promises.length;

    return new Promise((resolve, reject) => {
      promises.forEach((promise, idx) => {
        promise
          .then((res) => {
            count++;
            result.push(res);
            if (count == len) {
              resolve(result);
            }
          })
          .catch((err) => {
            reject(err);
          });
      });
    });
  }
}

IPromise.all([p1, p2])
  .then((res) => {
    console.log("res:", res);
  })
  .catch((err) => {
    console.log("err:", err);
  });
