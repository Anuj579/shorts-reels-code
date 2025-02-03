// Anuj Builds

const quizData = {
    options: ["Python", "Java", "C++", "JavaScript"],
    correctIndex: 3
};

const quizSection = document.getElementById("quiz-section");
const optionsContainer = document.getElementById("options");

const correctSound = new Audio("./yeah.mp3");
const wrongSound = new Audio("./noo.mp3");

optionsContainer.innerHTML = quizData.options.map((option, index) =>
    `<button class="btn btn-outline btn-neutral w-full" onclick="checkAnswer(this, ${index})">${option}</button>`).join("")

function checkAnswer(btn, index) {
    const isCorrect = index === quizData.correctIndex;
    btn.classList.replace("btn-neutral", isCorrect ? "btn-success" : "btn-error");
    const sound = isCorrect ? correctSound : wrongSound;
    sound.currentTime = 0
    sound.play()
}