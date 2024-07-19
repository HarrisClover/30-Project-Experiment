import os

# Create HTML file
html_code = '''
<!DOCTYPE html>
<html>
<head>
  <title>Project Management Goals</title>
  <link rel="stylesheet" type="text/css" href="style.css">
  <script src="script.js"></script>
</head>
<body>
  <h1>Project Management Goals</h1>
  <div class="slider-container">
    <label for="quality-slider">Good Quality</label>
    <input type="range" id="quality-slider" min="0" max="1" step="1">
  </div>
  <div class="slider-container">
    <label for="cost-slider">Cheap Cost</label>
    <input type="range" id="cost-slider" min="0" max="1" step="1">
  </div>
  <div class="slider-container">
    <label for="time-slider">Fast Time</label>
    <input type="range" id="time-slider" min="0" max="1" step="1">
  </div>
  <div id="result-container">
    <h2>Selected Goals:</h2>
    <p id="result-text"></p>
  </div>
</body>
</html>
'''

with open('index.html', 'w') as file:
    file.write(html_code)

# Create CSS file
css_code = '''
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
}

h1 {
  text-align: center;
}

.slider-container {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="range"] {
  width: 100%;
}

#result-container {
  margin-top: 40px;
}

#result-text {
  font-weight: bold;
}
'''

with open('style.css', 'w') as file:
    file.write(css_code)

# Create JavaScript file
js_code = '''
const qualitySlider = document.getElementById('quality-slider');
const costSlider = document.getElementById('cost-slider');
const timeSlider = document.getElementById('time-slider');
const resultText = document.getElementById('result-text');

function updateResult() {
  const qualityValue = qualitySlider.value;
  const costValue = costSlider.value;
  const timeValue = timeSlider.value;

  let result = '';

  if (qualityValue == 1) {
    result += 'Good Quality ';
  }

  if (costValue == 1) {
    result += 'Cheap Cost ';
  }

  if (timeValue == 1) {
    result += 'Fast Time';
  }

  resultText.textContent = result;
}

qualitySlider.addEventListener('input', updateResult);
costSlider.addEventListener('input', updateResult);
timeSlider.addEventListener('input', updateResult);
'''

with open('script.js', 'w') as file:
    file.write(js_code)