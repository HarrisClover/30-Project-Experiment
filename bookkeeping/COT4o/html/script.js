
const startBtn = document.getElementById('start-btn');
const insectSelection = document.querySelector('.insect-selection');
const gameScreen = document.querySelector('.game-screen');
const gameArea = document.getElementById('game-area');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const message = document.querySelector('.message');
let selectedInsect = '';
let score = 0;
let seconds = 0;

startBtn.addEventListener('click', () => {
    document.querySelector('.start-screen').classList.add('hidden');
    insectSelection.classList.remove('hidden');
});

document.querySelectorAll('.insect-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        selectedInsect = btn.getAttribute('data-insect');
        insectSelection.classList.add('hidden');
        gameScreen.classList.remove('hidden');
        startGame();
    });
});

function startGame() {
    setInterval(increaseTime, 1000);
    addInsect();
}

function increaseTime() {
    let m = Math.floor(seconds / 60);
    let s = seconds % 60;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;
    timeEl.innerHTML = `${m}:${s}`;
    seconds++;
}

function addInsect() {
    const insect = document.createElement('div');
    insect.classList.add('insect');
    insect.style.backgroundImage = `url('images/${selectedInsect}.png')`;
    const { x, y } = getRandomLocation();
    insect.style.top = `${y}px`;
    insect.style.left = `${x}px`;
    insect.addEventListener('click', catchInsect);
    gameArea.appendChild(insect);
}

function getRandomLocation() {
    const width = gameArea.clientWidth;
    const height = gameArea.clientHeight;
    const x = Math.random() * (width - 100);
    const y = Math.random() * (height - 100);
    return { x, y };
}

function catchInsect() {
    score++;
    scoreEl.innerHTML = score;
    this.remove();
    addInsect();
    if (score >= 10) {
        message.classList.remove('hidden');
    }
}
