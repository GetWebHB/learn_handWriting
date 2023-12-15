const nums = [1, 3, 5, 8, 9];

Array.prototype._filter = function (cb, thisArgs) {
  if (typeof cb !== "function") throw new TypeError(`${cb} is not a function`);

  const res = [];
  const len = this.length;
  for (let i = 0; i < len; i++) {
    const flag = cb.call(thisArgs, this[i], i, this);
    if (flag) {
      res.push(this[i]);
    }
  }

  return res;
};

const res = nums._filter((item) => item > 3);
console.log(res);
