'''
This is the main file that will be executed to run the software.
'''
import tkinter as tk
from tkinter import ttk
class HomePage(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Responsive Homepage")
        self.geometry("800x600")
        self.create_navigation_bar()
        self.create_welcoming_headline()
        self.create_introductory_text()
    def create_navigation_bar(self):
        navigation_bar = tk.Menu(self)
        self.config(menu=navigation_bar)
        file_menu = tk.Menu(navigation_bar, tearoff=False)
        file_menu.add_command(label="Home", command=self.go_to_home)
        file_menu.add_command(label="About", command=self.go_to_about)
        file_menu.add_command(label="Contact", command=self.go_to_contact)
        navigation_bar.add_cascade(label="Menu", menu=file_menu)
    def go_to_home(self):
        print("Go to Home")
    def go_to_about(self):
        print("Go to About")
    def go_to_contact(self):
        print("Go to Contact")
    def create_welcoming_headline(self):
        headline_label = ttk.Label(self, text="Welcome to Our Website!")
        headline_label.pack(pady=20)
    def create_introductory_text(self):
        introductory_text = ttk.Label(self, text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                                                  "Sed vestibulum, diam id tincidunt ultricies, "
                                                  "nunc nunc luctus mi, id aliquam arcu nunc sed nunc.")
        introductory_text.pack(pady=10)
if __name__ == "__main__":
    homepage = HomePage()
    homepage.mainloop()