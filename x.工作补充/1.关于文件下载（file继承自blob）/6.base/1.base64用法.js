console.log(btoa("JavaScript")); //转换base64
console.log(atob("SmF2YVNjcmlwdA==")); // 64解码

// base64使用场景
// 1. toDataURL 把canvas转为base64图片 base64小图片可以减少网络请求
// 2.readAsDataURL

const canvansEl = document.querySelector("#ice");
const ctx = canvansEl.getContext("2d");
ctx.fillStyle = "pink";
ctx.fillRect(0, 0, 100, 100);
// canvas转换为base64
console.log(canvansEl.toDataURL());
