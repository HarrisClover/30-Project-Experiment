'''
This is the main file of the password generator website.
'''
import tkinter as tk
from password_generator import PasswordGenerator
class PasswordGeneratorApp(tk.Tk):
    def __init__(self):
        tk.Tk.__init__(self)
        self.title("Password Generator")
        self.length_label = tk.Label(self, text="Password Length:")
        self.length_label.pack()
        self.length_entry = tk.Entry(self)
        self.length_entry.pack()
        self.uppercase_var = tk.IntVar()
        self.uppercase_checkbutton = tk.Checkbutton(self, text="Include Uppercase Letters", variable=self.uppercase_var)
        self.uppercase_checkbutton.pack()
        self.lowercase_var = tk.IntVar()
        self.lowercase_checkbutton = tk.Checkbutton(self, text="Include Lowercase Letters", variable=self.lowercase_var)
        self.lowercase_checkbutton.pack()
        self.numbers_var = tk.IntVar()
        self.numbers_checkbutton = tk.Checkbutton(self, text="Include Numbers", variable=self.numbers_var)
        self.numbers_checkbutton.pack()
        self.generate_button = tk.Button(self, text="Generate Password", command=self.generate_password)
        self.generate_button.pack()
        self.password_label = tk.Label(self, text="")
        self.password_label.pack()
    def generate_password(self):
        length = int(self.length_entry.get())
        include_uppercase = bool(self.uppercase_var.get())
        include_lowercase = bool(self.lowercase_var.get())
        include_numbers = bool(self.numbers_var.get())
        password_generator = PasswordGenerator(length, include_uppercase, include_lowercase, include_numbers)
        password = password_generator.generate_password()
        self.password_label.config(text=password)
if __name__ == "__main__":
    app = PasswordGeneratorApp()
    app.mainloop()