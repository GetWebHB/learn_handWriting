// blob和arrayBuffer区别： blob作为一个整体文件，适用于传输。 buffer：对二进制传输，修改某一段数据，适合使用arrayBuffer

const buffer = new ArrayBuffer(12);
console.log(buffer.byteLength);
console.log(buffer.slice(0, 8));

console.log(ArrayBuffer.isView(buffer));
