document.addEventListener('keydown', function(event) {
    document.getElementById('key').textContent = 'Key: ' + event.key;
    document.getElementById('keyCode').textContent = 'KeyCode: ' + event.keyCode;
    document.getElementById('code').textContent = 'Code: ' + event.code;
});
