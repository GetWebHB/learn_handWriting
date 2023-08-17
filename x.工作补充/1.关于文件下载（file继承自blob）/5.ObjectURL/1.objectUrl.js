const iptEl = document.querySelector("input");
const imgEl = document.querySelector("#preview");

iptEl.onchange = function (e) {
  const url = URL.createObjectURL(e.target.files[0]);
  imgEl.src = url;

  // revokeObjectURL 释放内存 提高性能
  // URL.revokeObjectURL(url);
};

// blob:http://127.0.0.1:5501/e2a33ec1-e7bb-40bd-894b-d073302766f3 blob:伪协议
// 可以将Blob/File对象转化为URL，通过这个URL 就可以实现文件下载或者图片显示等。
