document.addEventListener('DOMContentLoaded', () => {
    const clock = document.getElementById('clock');
    const timeDisplay = document.getElementById('time');
    const modeToggle = document.getElementById('modeToggle');
    let isDarkMode = false;

    function updateClock() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        const hoursDeg = (hours % 12) * 30 + minutes * 0.5;
        const minutesDeg = minutes * 6;
        const secondsDeg = seconds * 6;

        clock.style.setProperty('--hours-deg', `${hoursDeg}deg`);
        clock.style.setProperty('--minutes-deg', `${minutesDeg}deg`);
        clock.style.setProperty('--seconds-deg', `${secondsDeg}deg`);

        timeDisplay.textContent = now.toLocaleTimeString();
    }

    function toggleMode() {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle('dark-mode', isDarkMode);
        document.body.classList.toggle('light-mode', !isDarkMode);
        modeToggle.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    }

    modeToggle.addEventListener('click', toggleMode);

    setInterval(updateClock, 1000);
    updateClock();
    toggleMode(); // Initialize with dark mode
});