const arr = ["xxx", "hhh", "www"];

// arr.forEach(function (item, idx, cuv) {
//   console.log(item, idx, cuv, this);
// }, arr);

Array.prototype._forEach = function (cb, thisArgs) {
  const len = this.length;
  for (let i = 0; i < len; i++) {
    cb.call(thisArgs, this[i], i, this);
  }
};

// 箭头函数，不绑定this
arr._forEach(
  (item, idx, cuv) => {
    console.log(item, idx, cuv, this);
  },
  { name: "ice" }
);
