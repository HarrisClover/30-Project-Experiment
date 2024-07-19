'''
This is the main file of the password generator application.
'''
import tkinter as tk
from password_generator import PasswordGenerator
class PasswordGeneratorApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Password Generator")
        self.length_label = tk.Label(root, text="Password Length:")
        self.length_label.pack()
        self.length_entry = tk.Entry(root)
        self.length_entry.pack()
        self.uppercase_var = tk.IntVar()
        self.uppercase_checkbutton = tk.Checkbutton(root, text="Include Uppercase Letters", variable=self.uppercase_var)
        self.uppercase_checkbutton.pack()
        self.lowercase_var = tk.IntVar()
        self.lowercase_checkbutton = tk.Checkbutton(root, text="Include Lowercase Letters", variable=self.lowercase_var)
        self.lowercase_checkbutton.pack()
        self.numbers_var = tk.IntVar()
        self.numbers_checkbutton = tk.Checkbutton(root, text="Include Numbers", variable=self.numbers_var)
        self.numbers_checkbutton.pack()
        self.generate_button = tk.Button(root, text="Generate Password", command=self.generate_password)
        self.generate_button.pack()
        self.password_label = tk.Label(root, text="")
        self.password_label.pack()
    def generate_password(self):
        length = int(self.length_entry.get())
        uppercase = bool(self.uppercase_var.get())
        lowercase = bool(self.lowercase_var.get())
        numbers = bool(self.numbers_var.get())
        password_generator = PasswordGenerator(length, uppercase, lowercase, numbers)
        password = password_generator.generate_password()
        self.password_label.config(text=password)
if __name__ == "__main__":
    root = tk.Tk()
    app = PasswordGeneratorApp(root)
    root.mainloop()