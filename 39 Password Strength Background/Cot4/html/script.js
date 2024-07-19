
const passwordInput = document.getElementById('password');
const background = document.querySelector('.background');

passwordInput.addEventListener('input', function() {
    const input = this.value;
    const length = input.length;
    const blurValue = 10 - length * 0.5;
    background.style.filter = `blur(${blurValue}px)`;
});
