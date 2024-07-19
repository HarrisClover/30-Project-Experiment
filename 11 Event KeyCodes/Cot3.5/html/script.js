
document.addEventListener('keydown', function(event) {
  const keyInfo = document.getElementById('key-info');
  keyInfo.innerHTML = `
    <p>event.key: ${event.key}</p>
    <p>event.keyCode: ${event.keyCode}</p>
    <p>event.code: ${event.code}</p>
  `;
});
