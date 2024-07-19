// Game variables
let score = 0;
let timer = 0;
let threshold = 10;
let generateInsectInterval;
let updateTimerInterval;
// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Function to generate a random insect
function generateInsect() {
    const insects = ['bee', 'butterfly', 'ladybug'];
    const insectType = document.getElementById('insect-type').value;
    const insect = document.createElement('div');
    insect.classList.add('insect', insectType);
    insect.style.left = getRandomNumber(0, 360) + 'px';
    insect.style.top = getRandomNumber(0, 360) + 'px';
    insect.addEventListener('click', catchInsect);
    document.getElementById('game-board').appendChild(insect);
    const insectDuration = 5000; // 5 seconds
    setTimeout(() => {
        insect.remove();
        if (score < threshold) {
            generateInsect(); // Generate a new insect only if the score hasn't reached the threshold
        } else {
            clearInterval(generateInsectInterval); // Clear the interval for generating insects
            clearInterval(updateTimerInterval); // Clear the interval for updating the timer
        }
    }, insectDuration);
}
// Function to update the score
function updateScore() {
    score++;
    document.getElementById('score-value').textContent = score;
    if (score === threshold) {
        document.getElementById('message').textContent = 'Congratulations! You reached the threshold score.';
    }
}
// Function to update the timer
function updateTimer() {
    timer++;
    document.getElementById('timer-value').textContent = timer;
}
// Function to handle insect click event
function catchInsect() {
    this.remove();
    updateScore();
}
// Function to start the game
function startGame() {
    updateTimerInterval = setInterval(updateTimer, 1000);
    generateInsectInterval = setInterval(generateInsect, 1000);
}
// Event listener for game start
document.addEventListener('DOMContentLoaded', startGame);