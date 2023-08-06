class IPromise {
  constructor(executor) {
    this.PENDING = "PENDING";
    this.FULFILLED = "FULFILLED";
    this.REJECTED = "REJECTED";
    this.STATUS = this.PENDING;

    this.onFulfilledFns = [];
    this.onRejectedFns = [];

    this.value = undefined;
    this.reason = undefined;

    const resolve = (value) => {
      if (this.STATUS === this.PENDING) {
        this.STATUS = this.FULFILLED;
        this.value = value;

        // 执行成功回调函数
        queueMicrotask(() => {
          this.onFulfilledFns.forEach((fn) => fn(this.value));
        });
      }
    };

    const reject = (reason) => {
      if (this.STATUS === this.PENDING) {
        this.STATUS = this.REJECTED;
        this.reason = reason;

        // 执行失败回调函数
        queueMicrotask(() => {
          this.onRejectedFns.forEach((fn) => fn(this.reason));
        });
      }
    };

    executor(resolve, reject);
  }

  then(onFulfilled, onRejected) {
    return new IPromise((resolve, reject) => {
      if (this.STATUS === this.FULFILLED) {
        const val = onFulfilled(this.value);
        return resolve(val);
      }
      if (this.STATUS === this.REJECTED) {
        const reason = onRejected(this.reason);
        return reject(reason);
      }

      this.onFulfilledFns.push(() => {
        const val = onFulfilled(this.value);
        resolve(val);
      });

      this.onRejectedFns.push(() => {
        const reason = onRejected(this.reason);
        resolve(reason);
      });
    });
  }
}

const p = new IPromise((resolve, reject) => {
  setTimeout(() => {
    // resolve(123);
    reject("error");
  }, 1000);
  // resolve(123);
});

p.then(
  (res) => {
    console.log("res:", res);
    return "xxxx";
  },
  (err) => {
    console.log("err:", err);

    return "ddd";
  }
).then((res) => {
  console.log("res:", res);
});
