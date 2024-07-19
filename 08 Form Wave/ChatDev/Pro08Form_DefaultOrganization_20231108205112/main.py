'''
This is the main file of the login page software. It contains the main function that initializes the GUI and handles user interactions.
'''
import tkinter as tk
from authentication import authenticate_user
class LoginPage(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Login Page")
        self.geometry("400x200")
        self.username_label = tk.Label(self, text="Username:")
        self.username_label.pack()
        self.username_entry = tk.Entry(self)
        self.username_entry.pack()
        self.password_label = tk.Label(self, text="Password:")
        self.password_label.pack()
        self.password_entry = tk.Entry(self, show="*")
        self.password_entry.pack()
        self.login_button = tk.Button(self, text="Login", command=self.login)
        self.login_button.pack()
    def login(self):
        username = self.username_entry.get()
        password = self.password_entry.get()
        if authenticate_user(username, password):
            self.destroy()
            # Redirect to the main application
        else:
            error_label = tk.Label(self, text="Invalid username or password")
            error_label.pack()
def main():
    login_page = LoginPage()
    login_page.mainloop()
if __name__ == "__main__":
    main()