const nums = [10, 20, 30];

Array.prototype._map = function (cb, thisArgs) {
  if (typeof cb !== "function") throw new TypeError(`${cb} is not a function`);
  const res = [];

  const len = this.length;
  for (let i = 0; i < len; i++) {
    const r = cb.call(thisArgs, this[i], i, this);
    res.push(r);
  }

  return res;
};

const nums2 = nums._map((item) => item * 10);

console.log(nums2);
