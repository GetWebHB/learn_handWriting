// 本质：调用对象的valueOf方法，在调用toString方法
// const obj = { name: "ice" };
// console.log(obj + 1);

// 自定义valueOf方法,如果得到原始数据类型 不在调用toString方法
const obj = {
  valueOf() {
    return 1;
  },
};

console.log(obj + 1)