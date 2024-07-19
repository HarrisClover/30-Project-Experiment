document.addEventListener('DOMContentLoaded', (event) => {
    fetchJoke();
    document.getElementById('new-joke').addEventListener('click', fetchJoke);
});

function fetchJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => {
            document.getElementById('joke').innerText = `${data.setup} ${data.punchline}`;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('joke').innerText = 'Failed to fetch a joke. Please try again.';
        });
}
