// 改变this的指向，从而拿到准确类型
function getType(val) {
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase();
  // slice:最后一个为 -1 拿不到最后一个值
  // return Object.prototype.toString.call(val).slice(8, -1).replace("]", "").toLowerCase();
}

console.log(getType("432432"));
console.log(getType(new Date()));
console.log(getType([]));
