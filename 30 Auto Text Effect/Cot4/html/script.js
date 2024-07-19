
let words = ["Coding", "JavaScript", "HTML", "CSS", "Web Development"];
let index = 0;
let speed = document.getElementById("speed").value;

function changeText() {
    document.getElementById("changing-text").innerHTML = words[index];
    index++;
    if (index >= words.length) {
        index = 0;
    }
}

setInterval(changeText, 1000 * speed);

document.getElementById("speed").addEventListener("change", function() {
    speed = this.value;
    clearInterval(changeText);
    setInterval(changeText, 1000 * speed);
});
