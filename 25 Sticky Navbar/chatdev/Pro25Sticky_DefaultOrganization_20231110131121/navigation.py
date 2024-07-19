'''
This file contains the NavigationBar class for the homepage.
'''
import tkinter as tk
class NavigationBar(tk.Frame):
    def __init__(self, parent):
        super().__init__(parent)
        self.links = ["Home", "About", "Services", "Contact"]
        self.create_links()
    def create_links(self):
        for link in self.links:
            link_label = tk.Label(self, text=link, padx=10, pady=5)
            link_label.pack(side="left")
            link_label.bind("<Button-1>", lambda event, page=link: self.navigate_to(page))
    def navigate_to(self, page):
        # Implement the logic to navigate to the specified page
        # For example, you can use a web framework or update the content dynamically using JavaScript
        print(f"Navigating to {page} page")