'''
This file defines the graphical user interface using the tkinter library.
'''
import tkinter as tk
from email_verification import send_verification_code, generate_verification_code
class VerificationPage(tk.Frame):
    def __init__(self, master):
        super().__init__(master)
        self.master = master
        self.create_widgets()
    def create_widgets(self):
        self.label = tk.Label(self, text="Enter Verification Code:")
        self.label.pack()
        self.entry = tk.Entry(self)
        self.entry.pack()
        self.button = tk.Button(self, text="Verify", command=self.verify)
        self.button.pack()
    def verify(self):
        verification_code = self.entry.get()
        generated_code = generate_verification_code()
        if verification_code == str(generated_code):
            self.label.config(text="Verification Successful!")
        else:
            self.label.config(text="Verification Failed!")
        self.entry.delete(0, tk.END)
        email = 'cool_guy@email.com'
        send_verification_code(email, str(generated_code))