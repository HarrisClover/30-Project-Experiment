'''
This file contains the IntroSection class for the homepage.
'''
import tkinter as tk
class IntroSection(tk.Frame):
    def __init__(self, parent):
        super().__init__(parent)
        self.intro_text = tk.Text(self, height=10, width=50)
        self.intro_text.insert(tk.END, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, quam eget consectetur aliquet, velit nunc ultrices urna, a aliquam nunc mi vel nunc. Sed euismod, nunc id consequat vestibulum, nunc felis tincidunt tellus, id ultricies ligula mauris id nunc.")
        self.intro_text.pack(pady=20)