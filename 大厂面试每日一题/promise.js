class IPromise {
  STATUS = 'PENDING'
  onFulfilledFns = []
  onRejectedFns = []

  then(onfulfilled, onRejected) {
    this.onFulfilledFns.push(onfulfilled)
    this.onRejectedFns.push(onRejected)
  }

  constructor(executor) {
    this.resolve = (value) => {
      if (this.STATUS === 'PENDING') {
        this.STATUS = 'FULFILLED'
        this.value = value

        for (let fn of this.onFulfilledFns) {
          fn(this.value)
        }
      }
    }
    this.reject = (reason) => {
      if (this.STATUS === 'PENDING') {
        this.STATUS = 'REJECTED'
        this.reason = reason

        for (let fn of this.onFulfilledFns) {
          fn(this.reason)
        }
      }
    }
    executor(this.resolve, this.reject)
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
