from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Question(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question_text = db.Column(db.String(200), nullable=False)
    correct_answer = db.Column(db.String(200), nullable=False)
    option_1 = db.Column(db.String(200), nullable=False)
    option_2 = db.Column(db.String(200), nullable=False)
    option_3 = db.Column(db.String(200), nullable=False)
    option_4 = db.Column(db.String(200), nullable=False)
