// Anuj Builds

let currentAudio = null
function playSound(sound) {
    if (currentAudio !== null) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(`sounds/${sound}.mp3`);
    currentAudio.play();
}

document.getElementById("yeah").addEventListener("click", function () {
    playSound("yeah");
});

document.getElementById("noo").addEventListener("click", function () {
    playSound("noo");
});

document.getElementById("cancel").addEventListener("click", function () {
    playSound("cancel");
});

document.getElementById("subscribe").addEventListener("click", function () {
    playSound("subscribe");
});