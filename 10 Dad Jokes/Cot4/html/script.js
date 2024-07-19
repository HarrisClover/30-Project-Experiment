
document.addEventListener('DOMContentLoaded', function() {
    const jokeText = document.getElementById('joke');
    const newJokeBtn = document.getElementById('newJokeBtn');

    const getJoke = () => {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(data => jokeText.textContent = `${data.setup} ${data.punchline}`)
            .catch(error => console.error(error));
    }

    newJokeBtn.addEventListener('click', getJoke);
    getJoke();
});
