import os

# Create the HTML file
html_code = '''
<!DOCTYPE html>
<html>
<head>
  <title>JokeBot</title>
  <link rel='stylesheet' type='text/css' href='styles.css'>
</head>
<body>
  <div class='container'>
    <h1>JokeBot</h1>
    <div id='joke'></div>
    <button id='get-joke'>Get Another Joke</button>
  </div>

  <script src='script.js'></script>
</body>
</html>
'''

with open('index.html', 'w') as file:
    file.write(html_code)

# Create the CSS file
css_code = '''
.container {
  text-align: center;
  margin-top: 20vh;
}

h1 {
  font-size: 3rem;
  margin-bottom: 2rem;
}

#joke {
  font-size: 2rem;
  margin-bottom: 2rem;
}

#get-joke {
  font-size: 1.5rem;
  padding: 1rem 2rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
'''

with open('styles.css', 'w') as file:
    file.write(css_code)

# Create the JavaScript file
js_code = '''
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
'''

with open('script.js', 'w') as file:
    file.write(js_code)