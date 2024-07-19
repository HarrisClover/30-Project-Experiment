'''
This is the main file of our application.
'''
import tkinter as tk
from gui import VerificationPage
def main():
    root = tk.Tk()
    verification_page = VerificationPage(root)
    verification_page.pack()
    root.mainloop()
if __name__ == "__main__":
    main()