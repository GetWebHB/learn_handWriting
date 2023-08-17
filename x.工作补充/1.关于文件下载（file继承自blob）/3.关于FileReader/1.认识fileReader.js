// FileReader 是一个异步 API，用于读取文件并提取其内容以供进一步使用。FileReader 可以将 Blob 读取为不同的格式。
const fileInput = document.getElementById("fileInput");
const imgEl = document.querySelector(".img");
const video = document.querySelector("video");
const render = new FileReader();

fileInput.onchange = function (e) {
  const blob = e.target.files[0];
  // 读取text文件
  // render.readAsText(blob);
  // 读取图片文件 base64 可以给图片加载 比如 img/video 标签的 src 属性。
  render.readAsDataURL(blob);
};

render.onload = (e) => {
  // imgEl.src = e.target.result;
  video.src = e.target.result;
};

render.onprogress = (e) => {
  if (e.loaded && e.total) {
    // 已读 / 总量
    const p = (e.loaded / e.total) * 100;
    console.log(`进度:${p}%`);
  }
};
