
document.addEventListener('keydown', function(event) {
    document.getElementById('keyPressed').textContent = event.key;
    document.getElementById('keyCode').textContent = event.keyCode;
    document.getElementById('eventCode').textContent = event.code;
});
