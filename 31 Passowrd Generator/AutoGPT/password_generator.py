import random
import string

def generate_password(length, include_uppercase, include_numbers):
    characters = string.ascii_lowercase
    if include_uppercase:
        characters += string.ascii_uppercase
    if include_numbers:
        characters += string.digits
    password = ''.join(random.choice(characters) for _ in range(length))
    return password

length = int(input('Enter the length of the password: '))
include_uppercase = input('Include uppercase letters? (y/n): ').lower() == 'y'
include_numbers = input('Include numbers? (y/n): ').lower() == 'y'

password = generate_password(length, include_uppercase, include_numbers)
print('Generated password:', password)