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
    this.onFulfilledFns.push(onFulfilled);
    this.onRejectedFns.push(onRejected);
  }
}

const p = new IPromise((resolve, reject) => {
  resolve(123);
  reject("error");
});

p.then(
  (res) => {
    console.log("res:", res);
  },
  (err) => {
    console.log("err:", err);
  }
);

p.then(
  (res) => {
    console.log("res:", res);
  },
  (err) => {
    console.log("err:", err);
  }
);
