document.addEventListener("DOMContentLoaded", function() {
  const changingText = document.getElementById("changing-text");
  const speedSelect = document.getElementById("speed");

  const words = ["Programming", "Designing", "Creating", "Innovating"];
  let currentIndex = 0;
  let currentCharIndex = 0;
  let intervalId;

  function changeText() {
    if (currentCharIndex < words[currentIndex].length) {
      changingText.textContent += words[currentIndex][currentCharIndex];
      currentCharIndex++;
    } else {
      currentIndex = (currentIndex + 1) % words.length;
      changingText.textContent = '';
      currentCharIndex = 0;
    }
  }

  function startChangingText() {
    const speed = speedSelect.value;
    let delay;

    if (speed === "slow") {
      delay = 2000;
    } else if (speed === "medium") {
      delay = 1000;
    } else if (speed === "fast") {
      delay = 500;
    }

    intervalId = setInterval(changeText, delay);
  }

  function stopChangingText() {
    clearInterval(intervalId);
  }

  speedSelect.addEventListener("change", function() {
    stopChangingText();
    startChangingText();
  });

  startChangingText();
});
