'''
This file contains the Game class which manages the game logic.
'''
import tkinter as tk
from tkinter import messagebox
import random
class Game:
    def __init__(self, root):
        self.root = root
        self.root.title("Catch the Insect")
        self.root.geometry("400x400")
        self.score = 0
        self.time = 30
        self.insect_types = ["Ant", "Butterfly", "Ladybug"]
        self.threshold = 10
        self.score_label = tk.Label(self.root, text="Score: 0")
        self.score_label.pack()
        self.time_label = tk.Label(self.root, text="Time: 30")
        self.time_label.pack()
        self.insect_label = tk.Label(self.root, text="Insect: ")
        self.insect_label.pack()
        self.canvas = tk.Canvas(self.root, width=400, height=300, bg="white")
        self.canvas.pack()
        self.canvas.bind("<Button-1>", self.on_click)
    def start(self):
        self.update_score()
        self.update_time()
        self.generate_insect()
    def update_score(self):
        self.score_label.config(text=f"Score: {self.score}")
    def update_time(self):
        self.time_label.config(text=f"Time: {self.time}")
        if self.time > 0:
            self.time -= 1
            self.root.after(1000, self.update_time)
        else:
            self.game_over()
    def generate_insect(self):
        self.canvas.delete("insect")
        insect_type = random.choice(self.insect_types)
        self.insect_label.config(text=f"Insect: {insect_type}")
        x = random.randint(50, 350)
        y = random.randint(50, 250)
        self.canvas.create_text(x, y, text=insect_type, tags="insect", font=("Arial", 16))
    def on_click(self, event):
        item = self.canvas.find_closest(event.x, event.y)
        tags = self.canvas.gettags(item)
        if "insect" in tags:
            self.score += 1
            self.update_score()
            if self.score == self.threshold:
                self.show_message("Congratulations! You reached the threshold.")
            self.generate_insect()
    def game_over(self):
        self.show_message("Game Over")
    def show_message(self, message):
        messagebox.showinfo("Message", message)