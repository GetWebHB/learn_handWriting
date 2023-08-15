/*
  file只存在于浏览器环境， 继承自blob，
  File 对象是特殊类型的 Blob，且可以用在任意的 Blob 类型的 context 中。Blob 的属性和方法都可以用于 File 对象。
*/

const fileInput = document.querySelector("#fileInput");

fileInput.onchange = function (e) {
  // 类数组： [{lastModified: '', name: '', size: ''}]
  console.log(e.target.files);
};

/*
  每个 File 对象都包含文件的一些属性，这些属性都继承自 Blob 对象：
  lastModified：引用文件最后修改日期，为自1970年1月1日0:00以来的毫秒数；
  lastModifiedDate：引用文件的最后修改日期；
  name：引用文件的文件名；
  size：引用文件的文件大小；
  type：文件的媒体类型（MIME）；
  webkitRelativePath：文件的路径或 URL。

  通常，我们在上传文件时，可以通过对比 size 属性来限制文件大小，通过对比 type 来限制上传文件的格式等。
*/
