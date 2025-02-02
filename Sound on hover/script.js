// Anuj Builds

const cup = document.getElementById('hoverTea')
const sound = new Audio('./garam.mp3')

cup.addEventListener('mouseenter', () => {
    sound.currentTime = 0
    sound.play()
})