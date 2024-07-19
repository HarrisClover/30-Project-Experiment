document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const sound = new Audio(card.getAttribute('data-sound'));
            sound.play();
        });
    });
});