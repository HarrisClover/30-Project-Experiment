
window.addEventListener('DOMContentLoaded', (event) => {
  const currentTimer = document.getElementById('current-timer');
  const durationInput = document.getElementById('duration-input');
  const setButton = document.getElementById('set-button');
  const startButton = document.getElementById('start-button');
  const stopButton = document.getElementById('stop-button');
  const resetButton = document.getElementById('reset-button');
  let timerInterval;
  let duration = 0;
  
  setButton.addEventListener('click', () => {
    const enteredDuration = parseInt(durationInput.value);
    if (!isNaN(enteredDuration)) {
      duration = enteredDuration;
      currentTimer.textContent = formatTime(duration);
    }
  });
  
  startButton.addEventListener('click', () => {
    if (duration > 0 && !timerInterval) {
      timerInterval = setInterval(() => {
        duration--;
        currentTimer.textContent = formatTime(duration);
        if (duration === 0) {
          clearInterval(timerInterval);
          timerInterval = null;
        }
      }, 1000);
    }
  });
  
  stopButton.addEventListener('click', () => {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  });
  
  resetButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    duration = 0;
    currentTimer.textContent = formatTime(duration);
  });
  
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${padZero(minutes)}:${padZero(seconds)}`;
  }
  
  function padZero(number) {
    return number.toString().padStart(2, '0');
  }
});
