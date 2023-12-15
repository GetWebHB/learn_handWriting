const obj = {
  name: 'ice',
}

const p = new Proxy(obj, {
  get() {
    console.log(...arguments) // 函数内部的
  },
})

p.name

const bar = () => {
  console.log(arguments) // referror
}
