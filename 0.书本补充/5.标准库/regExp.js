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

// 不要给过大的范围的使用连字符 会产生你意想不到的结果
// const reg = /[A-z]/;
// console.log(reg.test("B"));
// console.log(reg.test("//"));
// console.log(reg.test("\\"));

/*
  预定义模式：某些模式的简写形式
  \d 匹配0-9之间的任一数字，相当于[0-9]。
  \D 匹配所有0-9以外的字符，相当于[^0-9]。
  \w 匹配任意的字母、数字和下划线，相当于[A-Za-z0-9_]。
  \W 除所有字母、数字和下划线以外的字符，相当于[^A-Za-z0-9_]。
  \s 匹配空格（包括换行符、制表符、空格符等），相等于[ \t\r\n\v\f]。
  \S 匹配非空格的字符，相当于[^ \t\r\n\v\f]。
  \b 匹配词的边界。
  \B 匹配非词边界，即在词的内部。
*/

// /s 案例
// const s = /\s\w*/;
// console.log(s.exec("hi ice"));

// /b 案例
// const s2 = /\bword/;
// console.log(s2.test("-word"));
// console.log(s2.test("hiword"));

// 遇见换行符会终止匹配 // 使用连字符[/s/S]
// const html = "<b>Hello</b>\n<i>world!</i>";
// // const reg = /.*/;
// const reg = /[\S\s]*/;
// console.log(reg.exec(html));

/*
  (6): 重复类 {n,} 大于n次
        {n,m} >n <m
*/

// const r1 = /lo{2}k/;
// const r2 = /lo{2,5}k/;
// console.log(r1.test("loooook"));
// console.log(r2.test("loooook"));

/*
  (7): 量词符
  ? 问号表示某个模式出现0次或1次，等同于{0, 1}。
  * 星号表示某个模式出现0次或多次，等同于{0,}。
  + 加号表示某个模式出现1次或多次，等同于{1,}。
*/

/*
  (8): 贪婪模式
  三个量词都是最大匹配

  +?：表示某个模式出现1次或多次，匹配时采用非贪婪模式。
  *?：表示某个模式出现0次或多次，匹配时采用非贪婪模式。
  ??：表格某个模式出现0次或1次，匹配时采用非贪婪模式。
*/

// const r1 = /a+/;
// const r2 = /a+?/; // 非贪婪模式 尽可能小匹配
// console.log(r1.exec("aaaaaaa"));
// console.log(r2.exec("aaaaaaa"));

/*
  (8): 修饰符
  /g 全局 可以多次reg.test
  /i 忽略大小写
  /m 匹配多行
*/

// console.log(/abc/.test("ABC"));
// console.log(/abc/i.test("ABC"));

const r1 = /world$/;
const r2 = /world$/m;
console.log(r1.test("world\n"));
console.log(r2.test("world\n"));
