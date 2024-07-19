'''
This is the main file for the bookkeeping assistant website.
'''
from flask import Flask, render_template, request
app = Flask(__name__)
@app.route('/')
def index():
    return render_template('index.html')
@app.route('/submit', methods=['POST'])
def submit():
    # Add logic to handle form submission
    # You can access the form data using request.form
    return render_template('success.html')
if __name__ == '__main__':
    app.run()