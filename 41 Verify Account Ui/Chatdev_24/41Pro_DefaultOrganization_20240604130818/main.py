'''
This is the main file that runs the program and handles the user input and verification process.
'''
import tkinter as tk
from email_sender import send_verification_code
def verify_email():
    email = email_entry.get()
    send_verification_code(email)
# Create the main window
window = tk.Tk()
window.title("Email Verification")
window.geometry("300x200")
# Create the email entry field
email_label = tk.Label(window, text="Enter your email:")
email_label.pack()
email_entry = tk.Entry(window)
email_entry.pack()
# Create the verify button
verify_button = tk.Button(window, text="Verify", command=verify_email)
verify_button.pack()
# Run the main loop
window.mainloop()