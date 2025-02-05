// Anuj Builds

const text = document.getElementById('text')
const img = document.getElementById('faceImg')

const changeFace = () => {
    img.src = 's2.jpg';
    text.innerText = 'After responsibilities hit 🥹';
};

const resetFace = () => {
    img.src = 's1.jpg';
    text.innerText = 'When life was chill 😉';
};

img.addEventListener('mousedown', changeFace)
img.addEventListener('mouseup', resetFace)
img.addEventListener('mouseleave', resetFace)