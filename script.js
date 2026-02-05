const panel = document.querySelector('.hero-panel');
const compare = document.querySelector('#compare');
const afterState = document.querySelector('.after');
const palette = document.querySelector('#command-palette');
const closePalette = document.querySelector('#close-palette');

window.addEventListener('scroll', () => {
  const y = Math.min(window.scrollY / 320, 1);
  panel.style.transform = `translateY(${y * 12}px) scale(${1 - y * 0.04})`;
});

compare.addEventListener('input', (event) => {
  afterState.style.setProperty('--reveal', `${event.target.value}%`);
});

window.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  if ((event.ctrlKey || event.metaKey) && key === 'k') {
    event.preventDefault();
    if (palette.open) {
      palette.close();
    } else {
      palette.showModal();
    }
  }
});

closePalette.addEventListener('click', () => {
  palette.close();
});
