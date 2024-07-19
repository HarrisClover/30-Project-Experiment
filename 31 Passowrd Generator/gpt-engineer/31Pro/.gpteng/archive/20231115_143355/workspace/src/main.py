from flask import Flask, request, jsonify
from password_generator import PasswordGenerator

app = Flask(__name__)

@app.route('/generate_password', methods=['POST'])
def generate_password():
    # Get the user's preferences from the request body
    length = request.json.get('length')
    use_uppercase = request.json.get('use_uppercase')
    use_lowercase = request.json.get('use_lowercase')
    use_numbers = request.json.get('use_numbers')

    # Create a password generator
    password_generator = PasswordGenerator(length, use_uppercase, use_lowercase, use_numbers)

    # Generate the password
    password = password_generator.generate()

    # Return the generated password
    return jsonify({'password': password})

if __name__ == '__main__':
    app.run(debug=True)
