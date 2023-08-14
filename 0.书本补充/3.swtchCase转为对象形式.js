// function doAction(action) {
//   switch (action) {
//     case "ice":
//       return "ice";
//     case "panda":
//       return "panda";
//     default:
//       return "no action";
//   }
// }

// 转换为

function doAction(action) {
  const actions = {
    ice() {
      return "ice";
    },
    panda() {
      return "panda";
    },
  };

  if (typeof actions[action] !== "function") throw new Error("no action");

  return actions[action]();
}

console.log(doAction("ice"));
console.log(doAction("xxxx"));
