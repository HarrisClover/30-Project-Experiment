
// Question bank
var questionBank = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Jupiter", "Saturn", "Mars", "Earth"],
        answer: "Jupiter"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Cu"],
        answer: "Au"
    }
];

var currentQuestionIndex = 0;
var score = 0;

// Function to randomly select a question
function selectQuestion() {
    var randomIndex = Math.floor(Math.random() * questionBank.length);
    var selectedQuestion = questionBank[randomIndex];
    questionBank.splice(randomIndex, 1); // Remove selected question from question bank
    return selectedQuestion;
}

// Function to display the question and answer options
function displayQuestion(question) {
    var questionElement = document.getElementById("question");
    questionElement.textContent = question.question;

    var option1Element = document.getElementById("option1");
    option1Element.textContent = question.options[0];

    var option2Element = document.getElementById("option2");
    option2Element.textContent = question.options[1];

    var option3Element = document.getElementById("option3");
    option3Element.textContent = question.options[2];

    var option4Element = document.getElementById("option4");
    option4Element.textContent = question.options[3];
}

// Function to handle user selection
function handleSelection(event) {
    var selectedOption = event.target.textContent;
    var currentQuestion = questionBank[currentQuestionIndex];

    if (selectedOption === currentQuestion.answer) {
        score++;
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questionBank.length) {
        var nextQuestion = selectQuestion();
        displayQuestion(nextQuestion);
    } else {
        endQuiz();
    }
}

// Function to end the quiz
function endQuiz() {
    var questionSection = document.getElementById("question-section");
    questionSection.style.display = "none";

    var answerSection = document.getElementById("answer-section");
    answerSection.style.display = "none";

    var submitButton = document.getElementById("submit-button");
    submitButton.style.display = "none";

    var scoreMessage = document.createElement("h2");
    scoreMessage.textContent = "Quiz ended. Your score: " + score;
    document.body.appendChild(scoreMessage);
}

// Event listeners
var answerOptions = document.getElementsByClassName("answer-option");
for (var i = 0; i < answerOptions.length; i++) {
    answerOptions[i].addEventListener("click", handleSelection);
}

// Initial setup
var firstQuestion = selectQuestion();
displayQuestion(firstQuestion);
