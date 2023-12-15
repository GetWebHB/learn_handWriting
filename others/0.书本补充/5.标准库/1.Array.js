const arr = [7, 1, 2, 3, 4];

console.log(arr.valueOf()); // 返回自身
console.log(arr.toString()); //1,2,3,4

// 重写valueOf方法/重写toString方法同理
arr.valueOf = function () {
  return "xxxx";
};
console.log(arr.valueOf());

// push + pop 的组合使用 就构成了 受限的线性结构 stack(栈)
// push + shift的组合使用 构成 受限的线性结构 queue(队列)
/*
 * 改变原数组
 *  push 尾增 返回长度
 *  pop 尾删 返回当前元素
 *
 * shift 首删 返回当前元素
 * unshift 首增 返回长度
 *
 * reverse 反转
 * splice 增/删/改
 * sort 排序
 */

/*
  不改变原数组
    concat拼接 arr.concat([] 或 1,1,1)
    slice: 可以实现浅拷贝 Array.prototype.slice.call(likeArray) array.slice()

*/

// 从小到大
// a - b > 0   [b,a]
// a - b <= 0   [a,b]
// arr.sort((a, b) => {
//   // > 0 b,a
//   // <= 0 a,b
//   return a - b;
// });
// console.log(arr);
