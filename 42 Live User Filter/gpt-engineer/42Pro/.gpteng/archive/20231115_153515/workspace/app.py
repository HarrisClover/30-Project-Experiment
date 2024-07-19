from flask import Flask, render_template, request, jsonify
import json

app = Flask(__name__)

# List of online users
online_users = [
    {"name": "John Doe", "location": "New York"},
    {"name": "Jane Doe", "location": "Los Angeles"},
    # Add more users as needed
]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search', methods=['POST'])
def search():
    query = request.form.get('query')
    results = [user for user in online_users if query in user['name'] or query in user['location']]
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)
