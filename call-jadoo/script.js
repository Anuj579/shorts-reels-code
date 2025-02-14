// Anuj Builds

const enterText = document.getElementById("enter");
const msgEl = document.getElementById("msg");
const keyEl = document.getElementById("key");

const sounds = {
    "B": new Audio("./sounds/b.mp3"),
    "C": new Audio("./sounds/c.mp3"),
    "F": new Audio("./sounds/f.mp3"),
    "E": new Audio("./sounds/e.mp3"),
    "D": new Audio("./sounds/d.mp3"),
};
const jadooArrivalSound = new Audio("./sounds/jadoo.mp3");

const sequences = [
    ["B", "C", "F", "E"],
    ["B", "C", "E", "D"],
    ["B", "C", "F", "E", "D", "E"]
];

let currentSequence = 0;
let currentStep = 0;
let gameStarted = false;

document.addEventListener("keydown", (event) => {
    const key = event.key.toUpperCase();

    if (!gameStarted) {
        if (key === "ENTER") {
            msgEl.classList.remove('hidden')
            gameStarted = true;
            enterText.textContent = "";
            updateKeyMessage();
        }
        return;
    }

    if (key === sequences[currentSequence][currentStep]) {
        sounds[key].play();
        currentStep++;

        if (currentStep < sequences[currentSequence].length) {
            updateKeyMessage();
        } else {
            currentSequence++;
            currentStep = 0;

            if (currentSequence < sequences.length) {
                updateKeyMessage();
            } else {
                setTimeout(() => {
                    jadooArrivalSound.play()
                }, 700);
                msgEl.textContent = "Jadoo has Arrived!🛸"
                keyEl.textContent = "";
            }
        }
    }
});

function updateKeyMessage() {
    keyEl.textContent = sequences[currentSequence][currentStep];
}