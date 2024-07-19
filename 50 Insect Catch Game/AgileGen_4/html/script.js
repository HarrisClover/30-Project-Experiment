
const gameBoard = document.getElementById('game-board');
const scoreDisplay = document.getElementById('score-display');
const timerDisplay = document.getElementById('timer-display');
const startStopBtn = document.getElementById('start-stop-btn');
const selectInsectDropdown = document.getElementById('select-insect-dropdown');
const messageDisplay = document.getElementById('message-display');

let score = 0;
let gameActive = false;
let gameTimer;
let countdown = 60;

function randomPosition() {
    const x = Math.floor(Math.random() * (gameBoard.clientWidth - 100));
    const y = Math.floor(Math.random() * (gameBoard.clientHeight - 100));
    return { x, y };
}

function spawnInsect() {
    const insect = document.createElement('img');
    insect.src = `images/${selectInsectDropdown.value}.png`;
    insect.style.position = 'absolute';
    const { x, y } = randomPosition();
    insect.style.left = `${x}px`;
    insect.style.top = `${y}px`;
    insect.onclick = catchInsect;
    gameBoard.appendChild(insect);
}

function catchInsect() {
    score += 10;
    scoreDisplay.textContent = `Score: ${score}`;
    this.remove();
    spawnInsect();
    if (score % 100 === 0) {
        messageDisplay.textContent = 'Great job! Keep going!';
        setTimeout(() => messageDisplay.textContent = '', 2000);
    }
}

function startGame() {
    gameActive = true;
    gameTimer = setInterval(() => {
        countdown--;
        timerDisplay.textContent = `Time: ${countdown}`;
        if (countdown <= 0) {
            endGame();
        }
    }, 1000);
    spawnInsect();
}

function endGame() {
    gameActive = false;
    clearInterval(gameTimer);
    gameBoard.innerHTML = '';
    messageDisplay.textContent = `Game over! Your final score is ${score}`;
}

startStopBtn.addEventListener('click', () => {
    if (gameActive) {
        endGame();
    } else {
        startGame();
    }
});
