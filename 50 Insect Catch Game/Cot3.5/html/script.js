
document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("container");
  const scoreValue = document.getElementById("score-value");
  const timerValue = document.getElementById("timer-value");
  const message = document.getElementById("message");
  const insectType = document.getElementById("insect-type");
  const startButton = document.getElementById("start-button");

  let score = 0;
  let timer = 60;
  let intervalId;

  function generateRandomPosition() {
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const insectWidth = 50;
    const insectHeight = 50;

    const randomX = Math.floor(Math.random() * (containerWidth - insectWidth));
    const randomY = Math.floor(Math.random() * (containerHeight - insectHeight));

    return { x: randomX, y: randomY };
  }

  function generateInsect() {
    const insect = document.createElement("div");
    insect.classList.add("insect");
    insect.style.left = generateRandomPosition().x + "px";
    insect.style.top = generateRandomPosition().y + "px";
    insect.addEventListener("click", handleInsectClick);
    container.appendChild(insect);
  }

  function handleInsectClick() {
    score++;
    scoreValue.textContent = score;
    this.remove();
    generateInsect();
  }

  function startGame() {
    score = 0;
    timer = 60;
    scoreValue.textContent = score;
    timerValue.textContent = timer;
    message.textContent = "";

    intervalId = setInterval(function() {
      timer--;
      timerValue.textContent = timer;

      if (timer === 0) {
        clearInterval(intervalId);
        message.textContent = "Game Over";
      }
    }, 1000);

    generateInsect();
  }

  startButton.addEventListener("click", startGame);
});
