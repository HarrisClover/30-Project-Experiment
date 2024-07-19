function updateTime() {
    var timeElement = document.getElementById('time');
    function updateClock() {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var timeString = hours.toString().padStart(2, '0') + ':' +
                         minutes.toString().padStart(2, '0') + ':' +
                         seconds.toString().padStart(2, '0');
        timeElement.textContent = timeString;
    }
    // Update the clock immediately
    updateClock();
    // Update the clock every second
    setInterval(updateClock, 1000);
}
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle('dark-mode');
}
// Call updateTime for the first time to start the loop
updateTime();