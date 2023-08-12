// String的转换形式与Number类似

// 1.基本数据类型： 直接转换成对应的字符串类型
// 2.复杂数据类型： 跟number相反，先调用toString方法，其次在调用valueOf方法, 如果这两个方法都得到obj则报错

const obj = { name: "ice" };

console.log(String(obj)); //[object object]

console.log(
  String({
    age: 22,
    toString() {
      return 1;
    },
  })
);

console.log(
  String({
    age: 22,
    valueOf() {
      return 2;
    },
  })
); //[object object]

console.log(
  String({
    age: 22,
    toString() {
      return "hhhh";
    },
    valueOf() {
      return 2;
    },
  })
);
