
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
const timeDisplay = document.querySelector('.time-display');
const modeSwitch = document.querySelector('.mode-switch');
const body = document.body;

function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDegrees = ((seconds / 60) * 360) + 90;
    const minuteDegrees = ((minutes / 60) * 360) + 90;
    const hourDegrees = ((hours / 12) * 360) + 90;

    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    timeDisplay.textContent = now.toLocaleTimeString();
}

function toggleMode() {
    body.classList.toggle('dark-mode');
}

modeSwitch.addEventListener('click', toggleMode);

setInterval(updateClock, 1000);
updateClock(); // Initialize clock on page load
