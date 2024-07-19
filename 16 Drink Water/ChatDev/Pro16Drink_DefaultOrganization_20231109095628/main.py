'''
This is the main file of the water consumption tracker application.
'''
import tkinter as tk
class WaterTrackerApp(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Water Consumption Tracker")
        self.goal = 8  # Daily goal in glasses
        self.current_progress = 0  # Current progress in glasses
        self.create_widgets()
    def create_widgets(self):
        self.glass_icons = []
        self.glass_buttons = []  # Initialize glass_buttons list
        for i in range(self.goal):
            glass_icon = tk.PhotoImage(file="glass_icon.png")
            self.glass_icons.append(glass_icon)
            glass_button = tk.Button(self, image=glass_icon, command=lambda i=i: self.log_water(i))
            glass_button.grid(row=0, column=i)
            self.glass_buttons.append(glass_button)  # Add glass_button to glass_buttons list
        self.progress_label = tk.Label(self, text=f"Progress: {self.current_progress}/{self.goal} glasses")
        self.progress_label.grid(row=1, columnspan=self.goal)
    def log_water(self, index):
        self.current_progress += 1
        self.progress_label.config(text=f"Progress: {self.current_progress}/{self.goal} glasses")
        self.glass_icons[index] = tk.PhotoImage(file="glass_icon_filled.png")
        self.glass_buttons[index].config(image=self.glass_icons[index])
if __name__ == "__main__":
    app = WaterTrackerApp()
    app.mainloop()