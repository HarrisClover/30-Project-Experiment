from flask import Flask, render_template
import os
import random

app = Flask(__name__)

@app.route('/')
def home():
    # Get list of images
    image_names = os.listdir('static/images')
    # Randomly shuffle the images
    random.shuffle(image_names)
    # Render the index.html template, passing in the images
    return render_template('index.html', image_names=image_names)

if __name__ == '__main__':
    app.run(debug=True)
