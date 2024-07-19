const words = ["Coding", "Music", "Art", "Science", "Traveling", "Reading"];
let currentIndex = 0;
let speed = 1000; // Initial speed in milliseconds

const changingTextElement = document.getElementById('changing-text');
const speedControlElement = document.getElementById('speedControl');

function changeText() {
    changingTextElement.textContent = words[currentIndex];
    currentIndex = (currentIndex + 1) % words.length;
}

function updateSpeed() {
    speed = speedControlElement.value;
    clearInterval(interval);
    interval = setInterval(changeText, speed);
}

let interval = setInterval(changeText, speed);

speedControlElement.addEventListener('input', updateSpeed);