'''
This is the main file of the flower drawing website.
'''
import tkinter as tk
from flower import Flower
class FlowerDrawingApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Flower Drawing App")
        self.canvas = tk.Canvas(self.root, width=800, height=600)
        self.canvas.pack()
        self.flower = Flower(self.canvas)
        self.draw_button = tk.Button(self.root, text="Draw Flower", command=self.draw_flower)
        self.draw_button.pack()
    def draw_flower(self):
        self.flower.draw()
if __name__ == "__main__":
    root = tk.Tk()
    app = FlowerDrawingApp(root)
    root.mainloop()