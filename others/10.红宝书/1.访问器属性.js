const obj = {}

Object.defineProperties(obj, {
  _year: {
    value: 2019,
  },

  ice: {
    get() {
      return 'xxx'
    },
  },
})

const desc = Object.getOwnPropertyDescriptor(obj, 'ice')
// console.log(desc.get())
// console.log(obj.ice)
