// 实现一：
Function.prototype.fakeBind = function (thisAgrs, ...args1) {
  const objThis = typeof thisAgrs !== 'object' ? Object(thisAgrs) : thisAgrs
  objThis.fn = this // this == f

  return function (...args2) {
    return objThis.fn.apply(thisAgrs, [...args1, ...args2])
  }
}

// 实现二：
// Function.prototype.fakeBind = function (thisAgrs, ...args1) {
//   return (...args2) => this.call(thisAgrs, ...args1, ...args2)
// }

function f(b, ...rest) {
  console.log(this.a, b, rest)
  return 'f fn'
}

//=> 3, 4
console.log(f.fakeBind({ a: 3 }, 4)(5, 6))
// {a:3, fn: f}.fn()
//=> 3, 10
// f.fakeBind({ a: 3 }, 10)(11)
