import tkinter as tk
from user import User
class Application(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("User Search")
        self.users = [
            User("John Doe", "New York"),
            User("Jane Smith", "London"),
            User("Alex Johnson", "Paris"),
            User("Emily Davis", "Tokyo"),
            User("Michael Brown", "Sydney")
        ]
        self.search_label = tk.Label(self, text="Search:")
        self.search_label.pack()
        self.search_entry = tk.Entry(self)
        self.search_entry.pack()
        self.search_button = tk.Button(self, text="Search", command=self.search_users)
        self.search_button.pack()
        self.results_text = tk.Text(self)
        self.results_text.pack()
    def search_users(self):
        query = self.search_entry.get()
        self.results_text.delete(1.0, tk.END)
        for user in self.users:
            if query.lower() in user.name.lower() or query.lower() in user.location.lower():
                self.results_text.insert(tk.END, f"{user.name} - {user.location}\n")
if __name__ == "__main__":
    app = Application()
    app.mainloop()