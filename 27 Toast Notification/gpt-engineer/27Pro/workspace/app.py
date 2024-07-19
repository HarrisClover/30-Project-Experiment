from flask import Flask, render_template, jsonify
from datetime import datetime

app = Flask(__name__)

# Sample notifications
notifications = [
    {"message": "Notification 1", "timestamp": datetime.now().isoformat()},
    {"message": "Notification 2", "timestamp": (datetime.now() - timedelta(minutes=5)).isoformat()},
    {"message": "Notification 3", "timestamp": (datetime.now() - timedelta(minutes=10)).isoformat()},
]

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/notifications')
def get_notifications():
    # Sort notifications by timestamp in descending order
    sorted_notifications = sorted(notifications, key=lambda x: x['timestamp'], reverse=True)
    return jsonify(sorted_notifications)

if __name__ == '__main__':
    app.run(debug=True)
