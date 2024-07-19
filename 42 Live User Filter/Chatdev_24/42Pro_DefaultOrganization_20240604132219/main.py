'''
This is the main file of the web application. It contains the code for the graphical user interface (GUI) and handles the user interactions.
'''
import tkinter as tk
import json
class User:
    def __init__(self, name, location, online):
        self.name = name
        self.location = location
        self.online = online
class Application(tk.Tk):
    def __init__(self, users):
        super().__init__()
        self.users = users
        self.title("User Search")
        self.search_label = tk.Label(self, text="Search:")
        self.search_label.pack()
        self.search_entry = tk.Entry(self)
        self.search_entry.pack()
        self.search_button = tk.Button(self, text="Search", command=self.search_users)
        self.search_button.pack()
        self.results_label = tk.Label(self, text="")
        self.results_label.pack()
    def search_users(self):
        search_term = self.search_entry.get().lower()
        results = []
        for user in self.users:
            if search_term in user.name.lower() or search_term in user.location.lower():
                results.append(user)
        if results:
            result_text = "Results:\n"
            for user in results:
                result_text += f"Name: {user.name}, Location: {user.location}\n"
        else:
            result_text = "No results found."
        self.results_label.config(text=result_text)
def load_users():
    # Load user data from a JSON file or database
    # For demonstration purposes, we'll use a hardcoded list here
    user_data = [
        {"name": "John Doe", "location": "New York", "online": True},
        {"name": "Jane Smith", "location": "London", "online": False},
        {"name": "Alice Johnson", "location": "Paris", "online": True},
        {"name": "Bob Williams", "location": "Berlin", "online": True},
        {"name": "Charlie Brown", "location": "Tokyo", "online": False}
    ]
    users = []
    for data in user_data:
        user = User(data["name"], data["location"], data["online"])
        users.append(user)
    return users
def main():
    users = load_users()
    app = Application(users)
    app.mainloop()
if __name__ == "__main__":
    main()