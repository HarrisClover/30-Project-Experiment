'''
This is the main file for our web application.
'''
import time
import threading
from flask import Flask, render_template, request
app = Flask(__name__)
timer_running = False
start_time = 0
duration = 0
timer_thread = None
def start_timer(duration):
    global timer_running, start_time, timer_thread
    if timer_thread:
        timer_thread.cancel()
    timer_running = True
    start_time = time.time()
    timer_thread = threading.Timer(duration, stop_timer)
    timer_thread.start()
def stop_timer():
    global timer_running
    timer_running = False
@app.route('/')
def index():
    return render_template('index.html')
@app.route('/start_timer', methods=['POST'])
def start_timer_route():
    global duration
    duration = int(request.form['duration'])
    start_timer(duration)
    return 'Timer started'
@app.route('/stop_timer', methods=['POST'])
def stop_timer_route():
    stop_timer()
    return 'Timer stopped'
if __name__ == '__main__':
    app.run(debug=True)