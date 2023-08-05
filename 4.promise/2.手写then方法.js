class IPromise {
  constructor(executor) {
    this.PENDING = "PENDING";
    this.FULFILLED = "FULFILLED";
    this.REJECTED = "REJECTED";
    this.STATUS = this.PENDING;

    this.value = undefined;
    this.reason = undefined;

    const resolve = (value) => {
      if (this.STATUS === this.PENDING) {
        this.STATUS = this.FULFILLED;
        this.value = value;

        // 执行成功回调函数
        queueMicrotask(() => {
          this.onFulfilled(this.value);
        });
      }
    };

    const reject = (reason) => {
      queueMicrotask(() => {
        if (this.STATUS === this.PENDING) {
          this.STATUS = this.REJECTED;
          this.reason = reason;

          // 执行失败回调函数
          queueMicrotask(() => {
            this.onRejected(this.reason);
          });
        }
      });
    };

    executor(resolve, reject);
  }

  then(onFulfilled, onRejected) {
    this.onFulfilled = onFulfilled;
    this.onRejected = onRejected;
  }
}

const p = new IPromise((resolve, reject) => {
  // 1. 当它是异步的，此时then函数回调，已经赋值所以可以拿到当前回调
  // setInterval(() => {
  //   resolve(100);
  //   reject("error");
  // }, 1000);

  // 2. TypeError: this.onFulfilled is not a function,
  // 因为如果resolve是同步的，直接执行resolve函数，此时then函数还没有被赋值
  // resolve(100);
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
