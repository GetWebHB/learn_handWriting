const obj = {
  name: "ice",
  valueOf() {
    return obj;
  },
  toString() {
    // return 99;
    return {};
  },
};

// 1. 首先调用对象的valueOf方法，如果是原始数据类型，直接Number（原始数据类型）
// 如果还是一个对象，直接调用toString方法, toString返回的还是一个对象，则直接报错

console.log(Number(obj));
