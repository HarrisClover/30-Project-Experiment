from flask_wtf import FlaskForm
from wtforms import StringField, RadioField, SubmitField
from wtforms.validators import DataRequired

class QuestionForm(FlaskForm):
    answer = RadioField('Answer', choices=[], validators=[DataRequired()])
    submit = SubmitField('Submit')
