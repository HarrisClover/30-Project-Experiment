const textDisplay = document.getElementById('textDisplay');
const speedControl = document.getElementById('speedControl');
const phrases = ['Programming', 'Coding', 'Building', 'Creating'];
let currentPhraseIndex = 0;
let animationDuration = 5000;
function changePhrase() {
    textDisplay.textContent = 'We Love ' + phrases[currentPhraseIndex];
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
}
function updateSpeed() {
    animationDuration = 500 * speedControl.value;
    textDisplay.style.animationDuration = animationDuration + 'ms';
}
setInterval(changePhrase, animationDuration);
speedControl.addEventListener('input', updateSpeed);