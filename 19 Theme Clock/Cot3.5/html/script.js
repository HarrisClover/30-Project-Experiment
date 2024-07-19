
function updateClock() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

    const hourRotation = (hours * 30) + (minutes * 0.5);
    const minuteRotation = (minutes * 6) + (seconds * 0.1);
    const secondRotation = seconds * 6;

    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;

    const currentTimeDisplay = document.getElementById('current-time');
    currentTimeDisplay.textContent = `${hours}:${minutes}:${seconds}`;

    setTimeout(updateClock, 1000);
}

updateClock();

const modeToggle = document.getElementById('mode-toggle');
const body = document.querySelector('body');

modeToggle.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
});
