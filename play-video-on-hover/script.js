// Anuj Builds

const video = document.getElementById("hoverVideo");

video.addEventListener("mouseenter", () => {
    video.play();
});

video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
});