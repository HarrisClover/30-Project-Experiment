'''
This file contains the PasswordGenerator class.
'''
import random
import string
class PasswordGenerator:
    def __init__(self, length, include_uppercase, include_lowercase, include_numbers):
        self.length = length
        self.include_uppercase = include_uppercase
        self.include_lowercase = include_lowercase
        self.include_numbers = include_numbers
    def generate_password(self):
        characters = ""
        if self.include_uppercase:
            characters += string.ascii_uppercase
        if self.include_lowercase:
            characters += string.ascii_lowercase
        if self.include_numbers:
            characters += string.digits
        if not characters:
            # Handle the case when no character type is selected
            characters = string.ascii_letters + string.digits  # Include both uppercase, lowercase, and numbers by default
        password = ''.join(random.choice(characters) for _ in range(self.length))
        return password