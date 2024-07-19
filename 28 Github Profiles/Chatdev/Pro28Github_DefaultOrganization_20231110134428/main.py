import tkinter as tk
import requests
import json
def search_github_user():
    username = entry.get()
    response = requests.get(f"https://api.github.com/users/{username}")
    user_data = json.loads(response.text)
    repositories = get_user_repositories(username)
    display_user_data(user_data, repositories)
def get_user_repositories(username):
    response = requests.get(f"https://api.github.com/users/{username}/repos")
    repositories = json.loads(response.text)
    return repositories
def display_user_data(user_data, repositories):
    text.delete(1.0, tk.END)
    text.insert(tk.END, f"Username: {user_data['login']}\n")
    text.insert(tk.END, f"Name: {user_data['name']}\n")
    text.insert(tk.END, f"Bio: {user_data['bio']}\n")
    text.insert(tk.END, f"Location: {user_data['location']}\n")
    text.insert(tk.END, f"Public Repositories: {user_data['public_repos']}\n")
    text.insert(tk.END, "\nRepositories:\n")
    for repo in repositories:
        text.insert(tk.END, f"- {repo['name']}\n")
window = tk.Tk()
window.title("Github User Search")
window.geometry("400x300")
label = tk.Label(window, text="Enter Github username:")
label.pack()
entry = tk.Entry(window)
entry.pack()
button = tk.Button(window, text="Search", command=search_github_user)
button.pack()
text = tk.Text(window)
text.pack()
window.mainloop()