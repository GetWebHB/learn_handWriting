class IPromise {
  STATUS = 'PENDING'
  onFulfilledFns = []
  onRejectedFns = []

  resolve(value) {
    if (this.STATUS === 'PENDING') {
      this.STATUS = 'FULFILLED'
      this.value = value

      for (let fn of this.onFulfilledFns) {
        fn(this.value)
      }
    }
  }
  reject(reason) {
    if (this.STATUS === 'PENDING') {
      this.STATUS = 'REJECTED'
      this.reason = reason

      for (let fn of this.onFulfilledFns) {
        fn(this.reason)
      }
    }
  }
  then(onfulfilled, onRejected) {
    this.onFulfilledFns.push(onfulfilled)
    this.onRejectedFns.push(onRejected)
  }

  constructor(executor) {
    executor(this.resolve.bind(this), this.reject.bind(this))
  }
}

const p1 = new IPromise((resolve, reject) => {
  setTimeout(() => {
    reject('REJ')
    resolve('REJ')
  }, 1000)
})

p1.then(
  (res) => {
    console.log('value:', res)
  },
  (err) => {
    console.log('err:', err)
  }
)
