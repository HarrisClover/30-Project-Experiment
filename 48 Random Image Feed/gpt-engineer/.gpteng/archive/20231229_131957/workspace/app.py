from flask import Flask, render_template
import os
import random

app = Flask(__name__)

@app.route('/')
def home():
    # Get a list of all the image files in the static/images directory
    image_files = os.listdir('static/images')

    # Randomly shuffle the list of image files
    random.shuffle(image_files)

    # Render the index.html template, passing in the image_files
    return render_template('index.html', image_files=image_files)

if __name__ == '__main__':
    app.run(debug=True)
