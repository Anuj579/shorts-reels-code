// Anuj Builds

const cube = document.querySelector('.cube');
let isDragging = false;
let previousX, previousY;
let rotateX = 30, rotateY = 30;

document.addEventListener('mousedown', (e) => {
    isDragging = true;
    previousX = e.clientX;
    previousY = e.clientY;
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    let deltaX = e.clientX - previousX;
    let deltaY = e.clientY - previousY;

    rotateY += deltaX * 0.5;
    rotateX -= deltaY * 0.5;

    cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    previousX = e.clientX;
    previousY = e.clientY;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

document.addEventListener('mouseleave', () => {
    isDragging = false;
});