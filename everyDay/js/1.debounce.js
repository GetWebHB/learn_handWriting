function debounce(cb, delay) {
  let timer = null

  return function (e) {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      return cb.call(this, e)
    }, delay)
  }
}

const debounced = debounce(function (e) {
  console.log(e, this, 111)
  return 'debounced'
}, 300)

window.addEventListener('resize', debounced)
