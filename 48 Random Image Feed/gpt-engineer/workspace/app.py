from flask import Flask, render_template
import os
import random

app = Flask(__name__)

@app.route('/')
def home():
    # Get a list of all the images in the static/images directory
    images = os.listdir('static/images')

    # Randomly shuffle the images
    random.shuffle(images)

    # Split the images into rows of 4 for the table
    image_rows = [images[i:i+4] for i in range(0, len(images), 4)]

    # Render the index.html template with the image_rows variable
    return render_template('index.html', image_rows=image_rows)

if __name__ == '__main__':
    app.run(debug=True)
