function throttle(cb, interval) {
  let lastTimestamp = 0
  return function (e) {
    const timestamp = new Date().valueOf()
    if (timestamp - lastTimestamp >= interval) {
      lastTimestamp = timestamp
      return cb.call(this, e)
    }
  }
}

const throttled = throttle(function (e) {
  console.log(e, this, 111)
  return 'throttled'
}, 3000)

window.addEventListener('resize', throttled)
