let currentQuestion = 0;
let score = 0;
const questions = [
    { question: "What is the main component of a computer that processes instructions?", options: ["CPU", "Hard Drive", "RAM", "Motherboard"], answer: 1 },
    // Add more questions as needed
];
const totalQuestions = questions.length;

function selectOption(option) {
    const options = document.querySelectorAll('.option');
    options.forEach((opt, index) => {
        if (index === option - 1) {
            opt.classList.add('selected');
        } else {
            opt.classList.remove('selected');
        }
    });
    document.getElementById('submitBtn').disabled = false;
}

function submitAnswer() {
    const selectedOption = document.querySelector('.selected');
    if (selectedOption && parseInt(selectedOption.getAttribute('onclick').split('(')[1]) === questions[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < totalQuestions) {
        loadQuestion(currentQuestion);
    } else {
        endQuiz();
    }
}

function loadQuestion(index) {
    const question = questions[index];
    document.getElementById('questionText').textContent = question.question;
    const options = document.getElementById('optionsSection').children;
    question.options.forEach((option, i) => {
        options[i].textContent = option;
        options[i].classList.remove('selected');
    });
    document.getElementById('currentQuestionNumber').textContent = currentQuestion + 1;
    document.getElementById('submitBtn').disabled = true;
}

function endQuiz() {
    document.getElementById('score').textContent = score;
    document.getElementById('scoreDisplay').hidden = false;
    document.getElementById('retakeQuizBtn').hidden = false;
    document.getElementById('submitBtn').hidden = true;
}

function retakeQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('scoreDisplay').hidden = true;
    document.getElementById('retakeQuizBtn').hidden = true;
    document.getElementById('submitBtn').hidden = false;
    loadQuestion(currentQuestion);
}

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion(currentQuestion);
});
