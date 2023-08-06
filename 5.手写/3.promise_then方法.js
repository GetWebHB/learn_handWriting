class IPromise {
  // resolve(val) {
  //   console.log(this);
  //   this.val = val;
  // }
  // reject(reason) {
  //   this.reason = reason;
  // }
  onFulfilledFns = [];
  onRejectedFns = [];

  constructor(executor) {
    const PENDING = "PENDING";
    const FULFILLED = "FULFILLD";
    const REJECTED = "REJECTED";
    let STATUS = PENDING;

    let val = undefined;
    let reason = undefined;

    const resolve = (value) => {
      if (STATUS === PENDING) {
        STATUS = FULFILLED;
        val = value;

        queueMicrotask(() => {
          this.onFulfilledFns.forEach((fn) => fn(val));
        });
      }
    };

    const reject = (rea) => {
      if (STATUS === PENDING) {
        STATUS = REJECTED;
        reason = rea;

        queueMicrotask(() => {
          this.onRejectedFns.forEach((fn) => fn(reason));
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

const p1 = new IPromise((resolve, reject) => {
  // reject("error");
  resolve(1000);
  // setTimeout(() => {
  //   resolve(1000);
  // }, 1000);
});

p1.then(
  (res) => {
    console.log("res:", res);
  },
  (err) => {
    console.log("err:", err);
  }
);

p1.then(
  (res) => {
    console.log("res2:", res);
  },
  (err) => {
    console.log("err2:", err);
  }
);

// 1.为什么类中 独立函数调用的this却是undefined
// 2.为什么箭头函数又可以拿到this呢？
// 3.onFulfilledFns中在then函数中为什么拿不到
