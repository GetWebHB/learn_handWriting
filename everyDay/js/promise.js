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

        setTimeout(() => {
          for (let fn of this.onFulfilledFns) {
            fn(this.value)
          }
        }, 0)
      }
    }
    this.reject = (reason) => {
      if (this.STATUS === 'PENDING') {
        this.STATUS = 'REJECTED'
        this.reason = reason

        setTimeout(() => {
          for (let fn of this.onRejectedFns) {
            fn(this.reason)
          }
        }, 0)
      }
    }
    executor(this.resolve, this.reject)
  }
}

const p1 = new IPromise((resolve, reject) => {
  // setTimeout(() => {
  //   reject('REJ')
  //   resolve('REJ')
  // }, 1000)
  resolve('RES')
})

p1.then(
  (res) => {
    console.log('value:', res)
  },
  (err) => {
    console.log('err:', err)
  }
)
