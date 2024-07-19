
const jokeElement = document.getElementById('joke');
const getJokeButton = document.getElementById('get-joke');

const jokes = [
  'Why don’t scientists trust atoms? Because they make up everything!',
  'I invented a new word! Plagiarism!',
  'Why did the scarecrow win an award? Because he was outstanding in his field!',
  'Why did the bicycle fall over? Because it was two-tired!',
  'What do you call a fish with no eyes? Fsh!',
];

let currentJokeIndex = 0;

function displayJoke() {
  jokeElement.textContent = jokes[currentJokeIndex];
}

function getNextJoke() {
  currentJokeIndex = (currentJokeIndex + 1) % jokes.length;
  displayJoke();
}

getJokeButton.addEventListener('click', getNextJoke);

// Initial joke display
displayJoke();
