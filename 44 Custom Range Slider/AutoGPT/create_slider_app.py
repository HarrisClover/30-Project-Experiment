import os

# Create HTML file
html_code = '''
<!DOCTYPE html>
<html>
<head>
  <title>Slider Application</title>
  <style>
    /* Add CSS styles for the slider component */
  </style>
</head>
<body>
  <h1>Slider Application</h1>
  <input type="range" min="0" max="100" value="50" id="slider">
  <p id="value">Value: 50</p>

  <script>
    // Add JavaScript code to handle slider interactions
  </script>
</body>
</html>
'''

with open('slider.html', 'w') as file:
    file.write(html_code)

# Open HTML file in default web browser
os.system('open slider.html')