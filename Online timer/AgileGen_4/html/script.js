
let timerDuration = 0;
let timerId = null;

document.getElementById('set').addEventListener('click', function() {
    const duration = document.getElementById('duration').value;
    timerDuration = parseInt(duration) * 60;
    document.getElementById('timer').textContent = formatTime(timerDuration);
    document.getElementById('feedback').textContent = `Timer set to ${duration} minutes.`;
});

document.getElementById('start').addEventListener('click', function() {
    if (timerId !== null) return;
    timerId = setInterval(function() {
        if (timerDuration > 0) {
            timerDuration--;
            document.getElementById('timer').textContent = formatTime(timerDuration);
        } else {
            clearInterval(timerId);
            timerId = null;
            document.getElementById('feedback').textContent = `Time's up!`;
        }
    }, 1000);
});

document.getElementById('stop').addEventListener('click', function() {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
        document.getElementById('feedback').textContent = `Timer stopped.`;
    }
});

document.getElementById('reset').addEventListener('click', function() {
    clearInterval(timerId);
    timerId = null;
    document.getElementById('timer').textContent = formatTime(timerDuration);
    document.getElementById('feedback').textContent = `Timer reset.`;
});

function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return [
        hrs > 9 ? hrs : '0' + hrs,
        mins > 9 ? mins : '0' + mins,
        secs > 9 ? secs : '0' + secs
    ].join(':');
}
