let score = 0;
let time = 60;
let timerId = null;

document.getElementById('start-game').addEventListener('click', startGame);

function startGame() {
    score = 0;
    time = 60;
    document.getElementById('score').innerText = score;
    document.getElementById('time').innerText = time;
    timerId = setInterval(updateTimer, 1000);
    generateInsect();
}

function updateTimer() {
    time--;
    document.getElementById('time').innerText = time;
    if (time === 0) {
        endGame();
    }
}

function endGame() {
    clearInterval(timerId);
    alert('Game Over! Your score is ' + score);
}

function generateInsect() {
    const insect = document.createElement('div');
    insect.classList.add('insect');
    insect.style.left = Math.random() * 100 + '%';
    insect.style.top = Math.random() * 100 + '%';
    insect.addEventListener('click', catchInsect);
    document.getElementById('insect-container').appendChild(insect);
}

function catchInsect() {
    score++;
    document.getElementById('score').innerText = score;
    this.parentNode.removeChild(this);
    generateInsect();
}
