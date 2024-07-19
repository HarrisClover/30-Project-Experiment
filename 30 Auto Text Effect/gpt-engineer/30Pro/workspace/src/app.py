from flask import Flask, render_template, jsonify
import random

app = Flask(__name__)

words = ["Python", "Flask", "JavaScript", "jQuery", "HTML", "CSS"]

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/word')
def get_word():
    word = random.choice(words)
    return jsonify({'word': word})

if __name__ == '__main__':
    app.run(debug=True)
