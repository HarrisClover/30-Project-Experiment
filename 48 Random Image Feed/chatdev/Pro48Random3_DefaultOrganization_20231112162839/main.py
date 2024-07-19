'''
The main.py file is responsible for running the Flask application and rendering the index.html template.
The get_image_files() function is used to retrieve a list of image files from the 'static/images' directory. The file extensions are checked using the correct tuple format in the revised code.
'''
from flask import Flask, render_template
import random
import os
app = Flask(__name__)
@app.route('/')
def index():
    image_files = get_image_files()
    random.shuffle(image_files)
    return render_template('index.html', image_files=image_files)
def get_image_files():
    image_files = []
    if os.path.exists('static/images'):
        for root, dirs, files in os.walk('static/images'):
            for file in files:
                if file.endswith(('.jpg', '.jpeg', '.png', '.gif',)):
                    image_files.append(file)
    return image_files
if __name__ == '__main__':
    app.run()