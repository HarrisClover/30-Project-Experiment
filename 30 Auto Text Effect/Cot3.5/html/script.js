
function changeText() {
    const words = ["coding", "music", "reading", "sports"];
    const randomIndex = Math.floor(Math.random() * words.length);
    const textContent = document.getElementById("text-content");
    textContent.innerHTML = "We Love " + words[randomIndex];
}

const textDisplay = document.getElementById("text-display");
textDisplay.addEventListener("mouseover", changeText);

const speedControl = document.getElementById("speed-control");
speedControl.addEventListener("input", function() {
    const speed = this.value;
    clearInterval(interval);
    interval = setInterval(changeText, 1000 / speed);
});

let interval = setInterval(changeText, 1000 / speedControl.value);
