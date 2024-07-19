from flask import Flask, render_template, request, redirect, url_for
from models import db, Question
from forms import QuestionForm

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
app.config['SECRET_KEY'] = 'secret'
db.init_app(app)

@app.route('/', methods=['GET', 'POST'])
def home():
    form = QuestionForm()
    question = Question.query.order_by(func.random()).first()
    if question:
        form.answer.choices = [(question.option_1, question.option_1), 
                               (question.option_2, question.option_2), 
                               (question.option_3, question.option_3), 
                               (question.option_4, question.option_4)]
    if form.validate_on_submit():
        if form.answer.data == question.correct_answer:
            return redirect(url_for('correct'))
        else:
            return redirect(url_for('incorrect'))
    return render_template('home.html', form=form, question=question)

@app.route('/correct')
def correct():
    return render_template('correct.html')

@app.route('/incorrect')
def incorrect():
    return render_template('incorrect.html')

if __name__ == '__main__':
    app.run(debug=True)
