class IPromise {
  constructor(executor) {
    this.PENDING = "PENDING";
    this.FULFILLED = "FULFILLED";
    this.REJECTED = "REJECTED";
    this.STATUS = this.PENDING;

    this.value = undefined;
    this.reason = undefined;

    // 为什么箭头函数？ 因为它不绑定this，为上一层作用域中的this
    const resolve = (value) => {
      if (this.STATUS === this.PENDING) {
        this.STATUS = this.FULFILLED;
        this.value = value;
      }
    };

    const reject = (reason) => {
      if (this.STATUS === this.PENDING) {
        this.STATUS = this.REJECTED;
        this.reason = reason;
      }
    };

    executor(resolve, reject);
  }
}

const p = new IPromise((resolve, reject) => {
  resolve(100);
  reject("error");
});

console.log(p);
