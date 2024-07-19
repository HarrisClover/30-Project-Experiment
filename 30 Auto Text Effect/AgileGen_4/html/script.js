const dynamicText = document.getElementById('dynamic-text');
const speedSlider = document.getElementById('speed-slider');

const words = ["Happiness", "Joy", "Life", "Everything"];
let currentWordIndex = 0;
let currentCharIndex = 0;
let speed = 200; // Initial speed in milliseconds for character display

function displayCharacter() {
    const currentWord = words[currentWordIndex];
    if (currentCharIndex < currentWord.length) {
        dynamicText.textContent += currentWord.charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(displayCharacter, speed);
    } else {
        currentWordIndex = (currentWordIndex + 1) % words.length;
        currentCharIndex = 0;
        setTimeout(() => {
            dynamicText.textContent = ""; // Clear the text before starting the next word
            displayCharacter(); // Start displaying the next word
        }, 1000); // Wait a bit before starting the next word
    }
}

speedSlider.addEventListener('input', function() {
    const speedOptions = {
        '1': 300, // slow
        '2': 200, // medium
        '3': 100  // fast
    };
    speed = speedOptions[speedSlider.value];
});

displayCharacter(); // Start the display process
