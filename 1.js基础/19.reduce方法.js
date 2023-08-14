const nums = [1, 2, 3, 4, 5]; // 15

Array.prototype._reduce = function (cb, initVal = 0) {
  if (typeof cb !== "function") throw new TypeError(`${cb} is not a function`);

  let res = initVal;
  const len = this.length;

  for (let i = 0; i < len; i++) {
    res = cb(res, this[i], i, this);
  }

  return res;
};

console.log(nums.reduce((prev, cuv) => prev + cuv));
