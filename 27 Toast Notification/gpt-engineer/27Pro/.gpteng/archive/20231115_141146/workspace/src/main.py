from flask import Flask, render_template, jsonify
from src.notifications import get_notifications

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/notifications', methods=['GET'])
def notifications():
    return jsonify(get_notifications())

if __name__ == '__main__':
    app.run(debug=True)
