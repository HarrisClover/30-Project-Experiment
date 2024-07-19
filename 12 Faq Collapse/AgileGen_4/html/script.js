
function toggleAnswer(element) {
    var answer = element.nextElementSibling;
    if (answer.style.display === "block") {
        answer.style.display = "none";
        element.querySelector('.arrow').textContent = '\u25BC'; // Down arrow
    } else {
        answer.style.display = "block";
        element.querySelector('.arrow').textContent = '\u25B2'; // Up arrow
    }
}
