// 如果本身就是一个object，即/Object的返回值为当前的对象

// const info1 = { name: "ice", age: 23 };
// const info2 = Object(info1);
// console.log(info1 === info2); // true

// const arr1 = [1, 2, 3];
// const arr2 = Object(arr1);
// console.log(arr1 === arr2); // true

// function bar1() {}
// const bar2 = Object(bar1);
// console.log(bar1 === bar2); // true

// const empty1 = null;
// const empty2 = Object(empty1);
// console.log(empty1 === empty2); // false

function isObject(o) {
  return o === Object(o);
}

// Object.prototype -> 实例方法所使用
const info = {
  name: "ice",
  age: 20,
};

// hasOwnProperty 自身上是否有的属性，而不是原型链上
console.log(info.hasOwnProperty("name"));
console.log(info.hasOwnProperty("toString"));
