const dropZone = document.getElementById("drop-zone");

dropZone.ondragover = (e) => {
  e.preventDefault();
};

dropZone.ondrop = (e) => {
  e.preventDefault();
  const files = e.dataTransfer.files;
  console.log(files);
};
