// const reg = /xyz/;
// console.log(reg.test("xyz111"));

// lastIndex：返回一个整数，表示下一次开始搜索的位置

/* /g修饰符: 会有多个结果，和lastIndex相辅相成，每次搜索后，都会改变lastIndex 
  const reg = /x/g;
  const s = "_x_x";
  g 代表 表示是全局搜索，会有多个结果

  console.log(reg.lastIndex);
  console.log(reg.test(s));
  console.log(reg.lastIndex);
  console.log(reg.test(s));
  console.log(reg.lastIndex);

  reg.lastIndex = 4;
  console.log(reg.test(s)); // false 设置了从第5个字符开始

  const reg2 = /bb/g;
  const s2 = "bb";
  console.log(reg2.test(s2));
  console.log(reg2.test(s2));
*/

/*
  exec：返回匹配成功的数组
*/
// const reg = /x/;
// console.log(reg.exec("_x_x"));

const reg = /(x)/;
console.log(reg.exec("_x_x"));
