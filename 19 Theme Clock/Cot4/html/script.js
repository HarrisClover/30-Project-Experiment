
function updateClock() {
    const now = new Date();
    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();
    document.getElementById('second').style.transform = `rotate(${second * 6}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minute * 6}deg)`;
    document.getElementById('hour').style.transform = `rotate(${hour * 30}deg)`;
    document.getElementById('time').textContent = `${hour}:${minute}:${second}`;
}
setInterval(updateClock, 1000);
document.getElementById('mode').addEventListener('click', function() {
    document.body.classList.toggle('dark');
});
