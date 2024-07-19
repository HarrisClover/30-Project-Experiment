
window.addEventListener('keydown', function(event) {
    document.getElementById('key').textContent = 'Key: ' + event.key;
    document.getElementById('keyCode').textContent = 'Key Code: ' + event.keyCode;
    document.getElementById('code').textContent = 'Code: ' + event.code;
});
