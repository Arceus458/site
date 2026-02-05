const panel = document.getElementById('projectPanel');
const slider = document.getElementById('slider');
const afterPane = document.getElementById('afterPane');
const palette = document.getElementById('commandPalette');
const openPaletteBtn = document.getElementById('openPaletteBtn');
const closePaletteBtn = document.getElementById('closePaletteBtn');

const updateFold = () => {
  if (!panel) return;
  const triggerPoint = window.innerHeight * 0.35;
  const rect = panel.getBoundingClientRect();
  panel.classList.toggle('unfold', rect.top < triggerPoint);
};

const updateCompare = () => {
  const value = Number(slider?.value || 55);
  if (afterPane) {
    afterPane.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
  }
};

const onPaletteToggle = (open) => {
  if (!palette) return;
  if (open) {
    if (typeof palette.showModal === 'function') palette.showModal();
  } else {
    palette.close();
  }
};

window.addEventListener('scroll', updateFold, { passive: true });
window.addEventListener('load', () => {
  updateFold();
  updateCompare();
});
slider?.addEventListener('input', updateCompare);

openPaletteBtn?.addEventListener('click', () => onPaletteToggle(true));
closePaletteBtn?.addEventListener('click', () => onPaletteToggle(false));

window.addEventListener('keydown', (event) => {
  const isMac = navigator.platform.toLowerCase().includes('mac');
  const modifier = isMac ? event.metaKey : event.ctrlKey;
  if (modifier && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    onPaletteToggle(true);
  }
  if (event.key === 'Escape' && palette?.open) {
    onPaletteToggle(false);
  }
});
