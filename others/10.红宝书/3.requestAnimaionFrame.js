function updateStatusBar() {
  const dom = document.querySelector('.status')
  const width = dom.style.width.split('px')[0]
  if (width < 1000) {
    dom.style.width = Number(width) + 1 + 'px'
    console.log(dom.style.width)
    updateStatusBar()
  }
}

requestAnimationFrame(updateStatusBar)
