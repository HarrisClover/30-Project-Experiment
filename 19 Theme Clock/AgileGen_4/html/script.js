
function updateClock() {
    const now = new Date();
    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();

    const secondDeg = ((second / 60) * 360) + 90;
    const minuteDeg = ((minute / 60) * 360) + ((second / 60) * 6) + 90;
    const hourDeg = ((hour / 12) * 360) + ((minute / 60) * 30) + 90;

    document.getElementById('secondHand').style.transform = `rotate(${secondDeg}deg)`;
    document.getElementById('minuteHand').style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById('hourHand').style.transform = `rotate(${hourDeg}deg)`;
    document.getElementById('digitalClock').textContent = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
}

function toggleMode() {
    const body = document.body;
    const button = document.getElementById('modeToggle');
    body.classList.toggle('dark-mode');
    button.textContent = body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
}

document.getElementById('modeToggle').addEventListener('click', toggleMode);

setInterval(updateClock, 1000);
updateClock();
