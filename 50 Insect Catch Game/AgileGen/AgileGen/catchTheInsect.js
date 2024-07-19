const startGameBtn = document.getElementById('start-game-btn');
const insectSelection = document.getElementById('insect-selection');
const gameArea = document.getElementById('game-area');
const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');
const pauseResumeBtn = document.getElementById('pause-resume-btn');
const endGameBtn = document.getElementById('end-game-btn');

let gameInterval;
let insectTimer;
let timer;
let score;
let isPaused = false;

startGameBtn.addEventListener('click', startGame);
pauseResumeBtn.addEventListener('click', pauseResumeGame);
endGameBtn.addEventListener('click', endGame);

function startGame() {
    resetGame();
    gameInterval = setInterval(updateGame, 1000);
    spawnInsect();
    insectTimer = setInterval(spawnInsect, 2000);
}

function pauseResumeGame() {
    if (isPaused) {
        gameInterval = setInterval(updateGame, 1000);
        insectTimer = setInterval(spawnInsect, 2000);
        pauseResumeBtn.textContent = 'Pause';
    } else {
        clearInterval(gameInterval);
        clearInterval(insectTimer);
        pauseResumeBtn.textContent = 'Resume';
    }
    isPaused = !isPaused;
}

function endGame() {
    clearInterval(gameInterval);
    clearInterval(insectTimer);
    resetGame();
}

function resetGame() {
    timer = 60;
    score = 0;
    timerElement.textContent = timer;
    scoreElement.textContent = score;
    gameArea.innerHTML = '';
}

function updateGame() {
    timer--;
    timerElement.textContent = timer;
    if (timer === 0) {
        endGame();
    }
}

function spawnInsect() {
    const insect = document.createElement('img');
    insect.src = getInsectImageUrl();
    insect.classList.add('insect');
    insect.style.left = Math.random() * (gameArea.clientWidth - 50) + 'px';
    insect.style.top = Math.random() * (gameArea.clientHeight - 50) + 'px';
    insect.addEventListener('click', catchInsect);
    gameArea.appendChild(insect);
}

function getInsectImageUrl() {
    const selectedInsect = insectSelection.value;
    let imgUrl;
    switch (selectedInsect) {
        case 'butterfly':
            imgUrl = 'https://th.bing.com/th?id=OIP.GImBRJ7k4-TUc5Id1ta-agHaGV&w=270&h=231&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2';
            break;
        case 'dragonfly':
            imgUrl = 'https://th.bing.com/th?id=OIP.JqrR_dgH8myggXv7b7jWLgHaGv&w=262&h=238&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2';
            break;
        case 'ladybug':
            imgUrl = 'data:image/jpeg;base64,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';
            break;
    }
    return imgUrl;
}

function catchInsect(event) {
    event.target.remove();
    score++;
    scoreElement.textContent = score;
    if (score >= 10) {
        showCongratulatoryMessage();
    }
}

function showCongratulatoryMessage() {
    const message = document.createElement('div');
    message.textContent = 'Congratulations! You reached 10 points!';
    message.classList.add('congratulatory-message');
    document.body.appendChild(message);
    setTimeout(() => {
        message.remove();
    }, 3000);
}
