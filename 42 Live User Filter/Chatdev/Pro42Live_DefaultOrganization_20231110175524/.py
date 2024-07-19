def search_users(self):
    query = self.search_entry.get()
    self.results_text.delete(1.0, tk.END)
    for user in self.users:
        if query.lower() in user.name.lower() or query.lower() in user.location.lower():
            self.results_text.insert(tk.END, f"{user.name} - {user.location}\n")