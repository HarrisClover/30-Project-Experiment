import tkinter as tk
from datetime import datetime
from database import ReminderDatabase
class ReminderApp:
    def __init__(self):
        self.db = ReminderDatabase("reminders.db")
        self.create_gui()
    def create_gui(self):
        self.root = tk.Tk()
        self.root.title("Event Reminder")
        event_label = tk.Label(self.root, text="Event:")
        event_label.pack()
        self.event_entry = tk.Entry(self.root)
        self.event_entry.pack()
        datetime_label = tk.Label(self.root, text="Date and Time (YYYY-MM-DD HH:MM):")
        datetime_label.pack()
        self.datetime_entry = tk.Entry(self.root)
        self.datetime_entry.pack()
        add_button = tk.Button(self.root, text="Add Reminder", command=self.add_reminder)
        add_button.pack()
        self.root.mainloop()
    def add_reminder(self):
        event = self.event_entry.get()
        datetime_str = self.datetime_entry.get()
        if event and datetime_str:
            try:
                datetime_obj = datetime.strptime(datetime_str, "%Y-%m-%d %H:%M")
                self.db.add_reminder(event, datetime_obj)
                self.event_entry.delete(0, tk.END)
                self.datetime_entry.delete(0, tk.END)
                print("Reminder added successfully!")
            except ValueError:
                print("Invalid date and time format. Please use YYYY-MM-DD HH:MM.")
        else:
            print("Event and date/time fields cannot be empty.")
if __name__ == "__main__":
    app = ReminderApp()