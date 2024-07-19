'''
This file contains the authentication logic for the login page. It includes a function to authenticate user credentials.
'''
import bcrypt
class User:
    def __init__(self, username, password):
        self.username = username
        self.password_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
def authenticate_user(username, password):
    # Perform authentication logic here
    # Return True if the user is authenticated, False otherwise
    # For demonstration purposes, let's assume there is a predefined list of users
    users = [
        User("admin", "admin123"),
        User("user1", "password1"),
        User("user2", "password2")
    ]
    for user in users:
        if user.username == username and bcrypt.checkpw(password.encode(), user.password_hash):
            return True
    return False