'''
This file contains the main logic for the Testimonial Box Switcher website.
'''
from flask import Flask, render_template, request, redirect
from database import get_testimonials, add_testimonial
app = Flask(__name__)
@app.route('/')
def index():
    testimonials = get_testimonials()
    return render_template('index.html', testimonials=testimonials)
@app.route('/add_testimonial_route', methods=['POST'])
def add_testimonial_route():
    name = request.form['name']
    message = request.form['message']
    add_testimonial(name, message)
    return redirect('/')
if __name__ == '__main__':
    app.run(debug=True)