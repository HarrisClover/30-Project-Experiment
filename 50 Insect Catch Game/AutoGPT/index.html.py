import os

html_code = '''
<!DOCTYPE html>
<html>
<head>
  <title>Catch the Insect</title>
  <style>
    /* Add CSS styles here */
  </style>
</head>
<body>
  <!-- Add HTML structure here -->
  <script>
    // Add JavaScript code here
  </script>
</body>
</html>
'''

with open('index.html', 'w') as file:
    file.write(html_code)

os.system('open index.html')