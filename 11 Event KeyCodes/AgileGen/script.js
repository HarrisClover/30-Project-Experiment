// app.js
document.addEventListener('DOMContentLoaded', () => {
    const keycodeValue = document.getElementById('keycode-value');
    const keyValue = document.getElementById('key-value');
    const keyCodeName = document.getElementById('key-code-name');
    const errorMessage = document.getElementById('error-message');

    document.addEventListener('keydown', (event) => {
        keycodeValue.textContent = event.keyCode;
        keyValue.textContent = event.key;
        keyCodeName.textContent = event.code;

        if (isUnsupportedKey(event)) {
            errorMessage.classList.remove('hidden');
        } else {
            errorMessage.classList.add('hidden');
        }
    });
});

function isUnsupportedKey(event) {
    // Add logic to detect unsupported keys, such as multimedia keys
    return false;
}
