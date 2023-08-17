const iframeEl = document.querySelector(".iframe");
const blob = new Blob(["hi ice"], { type: "text/plain" });

// 对blob进行切片
const subBlob = blob.slice(0, 3);

// 调用这个方法生成一个url连接
const url = URL.createObjectURL(subBlob);
iframeEl.src = url;
