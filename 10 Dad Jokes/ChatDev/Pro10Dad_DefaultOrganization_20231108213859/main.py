'''
This is the main file of the website that displays short jokes.
'''
import tkinter as tk
import requests
class JokeApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Joke App")
        self.joke_label = tk.Label(root, text="", font=("Arial", 16), wraplength=400)
        self.joke_label.pack(pady=20)
        self.get_joke_button = tk.Button(root, text="Get Another Joke", command=self.get_joke)
        self.get_joke_button.pack(pady=10)
        self.get_joke()
    def get_joke(self):
        try:
            response = requests.get("https://official-joke-api.appspot.com/random_joke")
            response.raise_for_status()  # Check for any HTTP errors
            joke_data = response.json()
            joke = f"{joke_data['setup']}\n\n{joke_data['punchline']}"
            self.joke_label.config(text=joke)
        except requests.exceptions.RequestException as e:
            # Handle the exception (e.g., display an error message)
            self.joke_label.config(text="Failed to retrieve joke. Please try again later.")
if __name__ == "__main__":
    root = tk.Tk()
    app = JokeApp(root)
    root.mainloop()