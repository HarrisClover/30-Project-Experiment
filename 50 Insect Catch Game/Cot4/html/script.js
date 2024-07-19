
let score = 0;
let timeLeft = 60;
let gameInterval;
let selectedInsect;

function startGame() {
    document.getElementById('insect-selection').style.display = 'none';
    gameInterval = setInterval(generateInsect, 1000);
    countdown();
}

function generateInsect() {
    const gameBoard = document.getElementById('game-board');
    const insect = document.createElement('div');
    insect.classList.add('insect');
    // Set random position
    insect.style.top = Math.random() * (gameBoard.offsetHeight - 100) + 'px';
    insect.style.left = Math.random() * (gameBoard.offsetWidth - 100) + 'px';
    // Add event listener for catching the insect
    insect.addEventListener('click', catchInsect);
    gameBoard.appendChild(insect);
}

function catchInsect() {
    score++;
    updateScore();
    this.remove();
    generateInsect();
}

function updateScore() {
    document.getElementById('score').innerText = score;
}

function countdown() {
    const timer = document.getElementById('time-left');
    const countdownInterval = setInterval(() => {
        timeLeft--;
        timer.innerText = timeLeft;
        if (timeLeft === 0) {
            clearInterval(countdownInterval);
            endGame();
        }
    }, 1000);
}

function endGame() {
    clearInterval(gameInterval);
    const message = document.getElementById('message');
    message.innerText = `Time's up! Your final score is ${score}.`;
}

startGame();
