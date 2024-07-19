from flask import Flask, request, jsonify
from password_generator import PasswordGenerator

app = Flask(__name__)

@app.route('/generate-password', methods=['POST'])
def generate_password():
    # Get the user's preferences from the request body
    preferences = request.get_json()

    # Validate the preferences
    if not all(key in preferences for key in ['length', 'use_uppercase', 'use_lowercase', 'use_numbers']):
        return jsonify({'error': 'Missing preferences'}), 400

    # Generate the password
    password_generator = PasswordGenerator(
        length=preferences['length'],
        use_uppercase=preferences['use_uppercase'],
        use_lowercase=preferences['use_lowercase'],
        use_numbers=preferences['use_numbers']
    )
    password = password_generator.generate()

    return jsonify({'password': password})

if __name__ == '__main__':
    app.run(debug=True)
