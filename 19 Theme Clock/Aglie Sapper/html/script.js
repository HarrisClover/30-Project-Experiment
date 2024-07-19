
function updateTime() {
    var clock = document.getElementById("clock");
    var time = document.getElementById("time");
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    clock.innerHTML = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
    time.innerHTML = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

setInterval(updateTime, 1000);
