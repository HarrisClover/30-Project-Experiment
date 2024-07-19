import tkinter as tk
from PIL import Image, ImageTk, ImageFilter
from password_strength_checker import PasswordStrengthChecker

class PasswordInputInterface:
    """
    This class creates the GUI interface.
    """
    def __init__(self):
        self.window = tk.Tk()
        self.window.title("Password Strength Checker")
        self.password_checker = PasswordStrengthChecker()
        self.image = Image.open("background.jpg")
        self.photo = ImageTk.PhotoImage(self.image)
        self.label = tk.Label(self.window, image=self.photo)
        self.label.pack()
        self.entry = tk.Entry(self.window, show="*")
        self.entry.pack()
        self.entry.bind('<KeyRelease>', self.update_blur)

    def update_blur(self, event):
        """
        This method updates the blur of the background image based on the password strength.
        """
        strength = self.password_checker.check_strength(self.entry.get())
        blur = ImageFilter.GaussianBlur(radius=(6-strength))
        blurred_image = self.image.filter(blur)
        self.photo = ImageTk.PhotoImage(blurred_image)
        self.label.config(image=self.photo)
        self.label.image = self.photo

    def run(self):
        self.window.mainloop()
