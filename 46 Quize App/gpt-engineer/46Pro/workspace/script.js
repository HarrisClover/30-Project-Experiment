let currentQuestion = 0;
let score = 0;
let questions = [
    {
        question: "What does CPU stand for?",
        choice1: "Central Processing Unit",
        choice2: "Central Process Unit",
        choice3: "Computer Personal Unit",
        choice4: "Central Processor Unit",
        answer: 1
    },
    // More questions...
];

function loadQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('question').innerText = question.question;
    document.getElementById('choice1').innerText = question.choice1;
    document.getElementById('choice2').innerText = question.choice2;
    document.getElementById('choice3').innerText = question.choice3;
    document.getElementById('choice4').innerText = question.choice4;
}

document.getElementById('submit-button').addEventListener('click', function() {
    // Check answer and update score...
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        // End of quiz...
    }
});

loadQuestion();
