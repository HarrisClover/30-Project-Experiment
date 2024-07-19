// List of words and corresponding sound files
const words = [
    { word: 'Apple', sound: 'sounds/apple.mp3' },
    { word: 'Banana', sound: 'sounds/banana.mp3' },
    // Add more words and sounds here
];

// Get the card container element
const cardContainer = document.getElementById('card-container');

// Create a card for each word
words.forEach(word => {
    // Create a new card element
    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = word.word;

    // Play the sound when the card is clicked
    card.addEventListener('click', () => {
        const audio = new Audio(word.sound);
        audio.play();
    });

    // Add the card to the card container
    cardContainer.appendChild(card);
});
