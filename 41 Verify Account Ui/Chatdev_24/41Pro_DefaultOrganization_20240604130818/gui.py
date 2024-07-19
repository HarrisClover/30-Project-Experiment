'''
This file handles the graphical user interface (GUI) using the tkinter framework.
'''
import tkinter as tk
from tkinter import messagebox
from config import EMAIL_ADDRESS, EMAIL_PASSWORD
def show_verification_code():
    verification_code = verification_code_entry.get()
    # TODO: Verify the entered code
    # Show a message box with the verification result
    if verification_code == "123456":
        result = "Verification successful!"
    else:
        result = "Verification failed!"
    tk.messagebox.showinfo("Verification Result", result)
# Create the verification code window
verification_code_window = tk.Tk()
verification_code_window.title("Verification Code")
verification_code_window.geometry("300x200")
# Create the verification code entry field
verification_code_label = tk.Label(verification_code_window, text="Enter the verification code:")
verification_code_label.pack()
verification_code_entry = tk.Entry(verification_code_window)
verification_code_entry.pack()
# Create the verify button
verify_button = tk.Button(verification_code_window, text="Verify", command=show_verification_code)
verify_button.pack()
# Run the verification code window
verification_code_window.mainloop()