import random
import string
class PasswordGenerator:
    def __init__(self, length, uppercase, lowercase, numbers):
        self.length = length
        self.uppercase = uppercase
        self.lowercase = lowercase
        self.numbers = numbers
    def generate_password(self):
        # Initialize the character set based on the selected options
        characters = ""
        if self.uppercase:
            characters += string.ascii_uppercase
        if self.lowercase:
            characters += string.ascii_lowercase
        if self.numbers:
            characters += string.digits
        # Generate the password using random characters from the character set
        password = "".join(random.choice(characters) for _ in range(self.length))
        return password