import tkinter as tk
class Flower:
    def __init__(self, canvas):
        self.canvas = canvas
    def draw(self):
        # Add your logic to draw different types of flowers here
        # You can use the canvas object to draw shapes and lines
        # Example: Draw a simple flower
        self.canvas.create_oval(100, 100, 200, 200, outline="red", fill="yellow")
        self.canvas.create_line(150, 200, 150, 300, fill="green")
        self.canvas.create_line(150, 200, 100, 250, fill="green")
        self.canvas.create_line(150, 200, 200, 250, fill="green")