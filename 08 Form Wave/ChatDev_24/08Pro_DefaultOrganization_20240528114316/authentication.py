def authenticate_user(username, password):
    # Implement your authentication logic here
    # Return True if the user is authenticated, False otherwise
    if username == "admin" and password == "password":
        return True
    else:
        return False