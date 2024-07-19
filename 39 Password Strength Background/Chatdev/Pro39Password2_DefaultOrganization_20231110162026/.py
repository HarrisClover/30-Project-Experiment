'''
A password input interface, the blurring degree of the background will change according to the strength of the password (the simpler, the clearer).
'''
import tkinter as tk
from password_strength import get_password_strength
from background_blur import get_blur_degree
def check_password_strength():
    password = password_entry.get()
    strength = get_password_strength(password)
    blur_degree = get_blur_degree(strength)
    # Update the background blur degree here
# Create the main window
window = tk.Tk()
# Create the password input field
password_label = tk.Label(window, text="Password:")
password_label.pack()
password_entry = tk.Entry(window, show="*")
password_entry.pack()
# Create the button to check password strength
check_button = tk.Button(window, text="Check Strength", command=check_password_strength)
check_button.pack()
# Run the main event loop
window.mainloop()