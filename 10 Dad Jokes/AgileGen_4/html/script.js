
const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call fake spaghetti? An impasta!",
    "Why did the bicycle fall over? Because it was two-tired!"
];

let currentJokeIndex = -1;

function getRandomJoke() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * jokes.length);
    } while (newIndex === currentJokeIndex);
    currentJokeIndex = newIndex;
    return jokes[currentJokeIndex];
}

document.addEventListener('DOMContentLoaded', () => {
    const jokeDisplayArea = document.getElementById('jokeDisplayArea');
    const getJokeButton = document.getElementById('getJokeButton');

    function displayJoke() {
        jokeDisplayArea.textContent = getRandomJoke();
    }

    getJokeButton.addEventListener('click', displayJoke);

    // Display a joke on initial load
    displayJoke();
});
