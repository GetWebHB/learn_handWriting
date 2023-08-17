// const obj = { name: "ice", age: 20 };
// console.log(JSON.stringify(obj));

// 第二个参数相当于 过滤 白名单内容
// console.log(JSON.stringify(obj, ["name"]));

// const arr = [1, 2, 3, 4];
// 第二个参数 对数组无效
// console.log(JSON.stringify(arr, [4]));

// 第二个参数，还可以是一个函数，可以用来加工原对象
const info = { name: "ice", age: 20 };

// 函数会被回调三次(val对应的值) info/ice/20
console.log(
  JSON.stringify(info, (key, val) => {
    if (typeof val === "number") {
      val *= 2;
    }
    return val;
  })
);
