const imageFirst = document.getElementById('imageFirst');
const imageBack = document.getElementById('imageBack');
let isResizing = false;
let startX = 0;
let touchStartX = 0;
let backgroundX = 0;

// Gestion des événements de la souris (PC)
imageBack.addEventListener('mousedown', (e) => {
    isResizing = true;
    startX = e.clientX;
});

window.addEventListener('mousemove', (e) => {
    if (isResizing) {
        const rect = imageBack.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const newWidth = Math.max(0, Math.min(rect.width, offsetX));
        imageFirst.style.width = newWidth + 'px';
    }
});

window.addEventListener('mouseup', () => {
    isResizing = false;
});

// Gestion du défilement avec la molette de la souris
imageFirst.addEventListener('wheel', (e) => {
    e.preventDefault();
    backgroundX += e.deltaY * 0.5;
    const maxScroll = imageFirst.offsetWidth - imageBack.offsetWidth;
    backgroundX = Math.max(-maxScroll, Math.min(0, backgroundX));
    imageFirst.style.backgroundPositionX = backgroundX + 'px';
});

imageFirst.addEventListener('touchstart', (e) => {
    isResizing = true;
    startX = e.clientX;
});

imageFirst.addEventListener('touchmove', (e) => {
    if (isResizing) {
        const rect = imageBack.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const newWidth = Math.max(0, Math.min(rect.width, offsetX));
        imageFirst.style.width = newWidth + 'px';
    }
});

imageFirst.addEventListener('touchend', () => {
    isResizing = false;
});