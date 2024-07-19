'''
This is the main file of the interactive text display program.
'''
import tkinter as tk
import time
class TextDisplayApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Interactive Text Display")
        self.text_label = tk.Label(self.root, text="We Love", font=("Arial", 24))
        self.text_label.pack(pady=10)
        self.change_text_button = tk.Button(self.root, text="Change Text", command=self.change_text)
        self.change_text_button.pack(pady=10)
        self.speed_scale = tk.Scale(self.root, from_=1, to=10, orient=tk.HORIZONTAL, label="Speed:", command=self.update_speed)
        self.speed_scale.set(5)
        self.speed_scale.pack(pady=10)
        self.words = ["Programming", "Coding", "ChatDev", "Python", "Web Development"]
        self.current_word_index = 0
        self.speed = 5
        self.after_id = None  # New attribute to store the ID returned by self.root.after
        self.update_text()
    def update_text(self):
        self.text_label.config(text="We Love " + self.words[self.current_word_index])
        self.current_word_index = (self.current_word_index + 1) % len(self.words)
        self.after_id = self.root.after(1000 // self.speed, self.update_text)  # Store the ID of the scheduled update
    def change_text(self):
        self.current_word_index = (self.current_word_index + 1) % len(self.words)
        self.update_text()
    def update_speed(self, value):
        self.speed = int(value)
        self.root.after_cancel(self.after_id)  # Cancel the previous scheduled update using the stored ID
        self.update_text()  # Schedule a new update with the updated speed
if __name__ == "__main__":
    root = tk.Tk()
    app = TextDisplayApp(root)
    root.mainloop()