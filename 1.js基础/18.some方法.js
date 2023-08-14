const nums = [10, 5, 3, 1];

Array.prototype._some = function (cb, thisArgs) {
  if (typeof cb !== "function") throw new TypeError(`${cb} is not a function`);

  let flag = false;
  const len = this.length;
  for (let i = 0; i < len; i++) {
    const res = cb.call(thisArgs, this[i], i, this);
    if (res) flag = true;
  }

  return flag;
};

console.log(nums._some((item) => item > 3));
console.log(nums._some(123));
