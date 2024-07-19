'''
This is the main file of the Note App.
It initializes the GUI and handles user interactions.
'''
import tkinter as tk
from note_manager import NoteManager
class NoteApp:
    def __init__(self):
        self.root = tk.Tk()
        self.note_manager = NoteManager()
        self.root.title("Note App")
        self.root.geometry("400x300")
        self.note_text = tk.Text(self.root)
        self.note_text.pack()
        self.save_button = tk.Button(self.root, text="Save", command=self.save_note)
        self.save_button.pack()
        self.load_button = tk.Button(self.root, text="Load", command=self.load_note)
        self.load_button.pack()
    def save_note(self):
        note = self.note_text.get("1.0", tk.END)
        self.note_manager.save(note)
    def load_note(self):
        note = self.note_manager.load()
        self.note_text.delete("1.0", tk.END)
        self.note_text.insert(tk.END, note)
    def run(self):
        self.root.mainloop()
if __name__ == "__main__":
    app = NoteApp()
    app.run()