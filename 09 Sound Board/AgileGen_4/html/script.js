
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        const word = card.getAttribute('data-word');
        const audio = new Audio(`sounds/${word}.mp3`);
        audio.play();
        card.classList.toggle('flipped');
    });
});
