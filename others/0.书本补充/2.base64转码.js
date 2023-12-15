const name = "ice";
// 存在中文会报错
console.log(btoa(name));
console.log(atob("aWNl"));

const address = "杭州市";
console.log(btoa(encodeURIComponent(address)));
console.log(decodeURIComponent(atob("JUU2JTlEJUFEJUU1JUI3JTlFJUU1JUI4JTgy")));
