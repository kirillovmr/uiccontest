const maxHeight = 380;
function size() {
  const h = document.querySelector('.block-img').clientHeight;
  if (h > maxHeight) return;
  document.querySelectorAll('.fixed-height').forEach(el => {
    el.style.height = h + 'px';
  })
}

document.addEventListener("DOMContentLoaded", size);
window.addEventListener('resize', size)
