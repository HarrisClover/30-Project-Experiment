
document.addEventListener('DOMContentLoaded', function() {
    fetchRandomJoke();
});

document.getElementById('new-joke-btn').addEventListener('click', function() {
    fetchRandomJoke();
});

function fetchRandomJoke() {
    const jokes = [
        "Why don't skeletons fight each other? They don't have the guts.",
        "I told my wife she was drawing her eyebrows too high. She looked surprised.",
        "I'm reading a book on anti-gravity. It's impossible to put down!",
        // Add more jokes here
    ];

    const randomIndex = Math.floor(Math.random() * jokes.length);
    const randomJoke = jokes[randomIndex];

    const jokeTextElement = document.getElementById('joke-text');
    jokeTextElement.innerText = randomJoke;

    jokeTextElement.classList.add('fade-in');
    setTimeout(() => jokeTextElement.classList.remove('fade-in'), 500);
}
