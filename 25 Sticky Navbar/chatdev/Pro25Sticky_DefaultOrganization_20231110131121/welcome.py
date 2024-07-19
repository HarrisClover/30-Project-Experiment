'''
This file contains the WelcomeSection class for the homepage.
'''
import tkinter as tk
class WelcomeSection(tk.Frame):
    def __init__(self, parent):
        super().__init__(parent)
        self.title_label = tk.Label(self, text="Welcome to Our Website!", font=("Arial", 24))
        self.title_label.pack(pady=20)
        self.subtitle_label = tk.Label(self, text="Explore our services and find what you need.")
        self.subtitle_label.pack()