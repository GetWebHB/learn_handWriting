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

// const reg = /(x)/;
// console.log(reg.exec("_x_x")[0]); // [x,x]

/*
  exec：包含圆括号（表示有多个匹配组，匹配到多个前面： 第一个成员是整个匹配的结果，第二个成员是圆括号匹配的结果。）
*/

// const str = "_x_x";
// const reg = /_(x)/g;

// console.log(reg.exec(str)); // ['_x, x']

/*
  exec: /g修饰符代表全局匹配 可以调用exec多次
*/

// const reg = /a/g;
// const str = "abc_abc";

// const r1 = reg.exec(str); // [a]
// console.log(r1, r1.index); // [0]

// const r2 = reg.exec(str); // [a]
// console.log(r2, r2.index); // [4]

// 报错,因为已经匹配不到
// const r3 = reg.exec(str); // null
// console.log(r3, r3.index); // [4]

// 轮询遍历匹配结果
// while (true) {
//   const match = reg.exec(str);
//   if (!match) return;

//   console.log(`${match[0]}-${match.index}`);
// }

/*
  字符串实例方法与正则相关:
  match -> 返回字符串匹配结果 /x/g g修饰符代表 一次性返回所有匹配结果
  search -> 搜索字符串
  replace -> 替换字符串
  split
*/

// const reg = /dw/;
// const str = "abc_dwagxx_dw";
// console.log(str.match(reg));

/*
  匹配规则
  字面量字符: 类似 /a/ -> a /b/ -> b 就代表字符一样就行
*/

// 元字符:

// (1) 点字符 (任意单个字符)
// const s1 = "dog";
// const s2 = "dag";
// const s3 = "daag";

// const reg = /d.g/;
// console.log(reg.test(s1));
// console.log(reg.test(s2));
// console.log(reg.test(s3));

// （2）位置字符 $已什么结尾 ^已什么开头
// const r1 = /test$/;
// const r2 = /^test/;

// console.log(r1.test("atest"));
// console.log(r2.test("atest"));

// （3）选择符（|） 或的关系
// const reg = /dog|cat/;
// console.log(reg.test("cat"));
// console.log(reg.test("pig"));

// (4) 转义符 \(反斜杠) 一些元字符需要转换 因为元字符有特殊含义,不是代表自身

// 字面量创建
// const reg = /1\+1/;
// console.log(reg.test("1+1"));

// 构造函数
// const reg = new RegExp("1\\+1");
// console.log(reg.test("1+1"));

// (5) 字符类[]方括号 [xyz]只要匹配其一
// const reg = /[xyz]/;
// console.log(reg.test("apply"));
// console.log(reg.test("apple"));

// (5.1 ^脱字符,除了字符类中除了该字符都可以匹配)
// const reg = /[^xyz]/;
// console.log(reg.test("x"));
// console.log(reg.test("apply"));
// console.log(reg.test("apple"));

// 代表所有字符都可以匹配
// const reg = /[^]/;
// console.log(reg.test("dawa"));

// (5.2 -连字符 简化代表[a-z中间的任意字符都可], 一定要出现在方括号中,不然不具备简写能力)
// const r1 = /a-z/;
// const r2 = /[a-z]/;

// console.log(r1.test("b")); // false
// console.log(r2.test("b")); // true
