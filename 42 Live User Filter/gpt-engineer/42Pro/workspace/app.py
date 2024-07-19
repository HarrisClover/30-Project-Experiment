from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from models import User, UserSchema

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
db = SQLAlchemy(app)
ma = Marshmallow(app)

user_schema = UserSchema()
users_schema = UserSchema(many=True)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.filter_by(online_status=True).all()
    return users_schema.jsonify(users)

@app.route('/users', methods=['POST'])
def filter_users():
    query = request.json['query']
    users = User.query.filter(User.name.contains(query) | User.location.contains(query)).filter_by(online_status=True).all()
    return users_schema.jsonify(users)

if __name__ == '__main__':
    app.run(debug=True)
