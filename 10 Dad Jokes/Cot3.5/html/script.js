
const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you call a fish with no eyes? Fsh!",
    "Why did the bicycle fall over? Because it was two-tired!"
];

function displayJoke() {
    const jokeContainer = document.getElementById("joke-container");
    const joke = document.getElementById("joke");

    const randomIndex = Math.floor(Math.random() * jokes.length);
    const randomJoke = jokes[randomIndex];

    joke.textContent = randomJoke;
    jokeContainer.style.display = "block";
}
