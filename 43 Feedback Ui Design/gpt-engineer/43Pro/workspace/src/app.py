from flask import Flask, render_template, request, redirect, url_for
from database import init_db, db_session
from models import Feedback

app = Flask(__name__)
init_db()

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        feedback = request.form.get('feedback')
        new_feedback = Feedback(feedback)
        db_session.add(new_feedback)
        db_session.commit()
        return redirect(url_for('index'))
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)
