function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const arrow = element.querySelector('.arrow');

    if (answer.style.display === "block") {
        answer.style.display = "none";
        arrow.classList.remove('open');
    } else {
        answer.style.display = "block";
        arrow.classList.add('open');
    }
}