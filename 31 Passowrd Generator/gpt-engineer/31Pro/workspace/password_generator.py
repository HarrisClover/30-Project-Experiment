import random
import string

class PasswordGenerator:
    def __init__(self, length, use_uppercase, use_lowercase, use_numbers):
        self.length = length
        self.use_uppercase = use_uppercase
        self.use_lowercase = use_lowercase
        self.use_numbers = use_numbers

    def generate(self):
        # Define the characters that can be used in the password
        characters = ''
        if self.use_uppercase:
            characters += string.ascii_uppercase
        if self.use_lowercase:
            characters += string.ascii_lowercase
        if self.use_numbers:
            characters += string.digits

        # Generate the password
        password = ''.join(random.choice(characters) for _ in range(self.length))

        return password
