import tkinter as tk
from notifications import Notifications
class App:
    def __init__(self):
        self.notifications = Notifications()
        self.root = tk.Tk()
        self.root.title("Notifications")
        self.label = tk.Label(self.root, text="")
        self.label.pack()
        self.button = tk.Button(self.root, text="Show notifications", command=self.show_notifications)
        self.button.pack()
    def show_notifications(self):
        notifications = self.notifications.get_notifications()
        self.label.config(text="\n".join(notifications))
    def run(self):
        self.root.mainloop()
if __name__ == "__main__":
    app = App()
    app.run()