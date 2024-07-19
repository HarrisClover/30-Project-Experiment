'''
This file contains the Flower class.
'''
import random
class Flower:
    def __init__(self, canvas):
        self.canvas = canvas
    def draw(self):
        x = random.randint(100, 700)
        y = random.randint(100, 500)
        radius = random.randint(50, 100)
        self.canvas.create_oval(x-radius, y-radius, x+radius, y+radius, outline="black", fill="yellow")
        self.canvas.create_polygon(x, y-radius, x-radius/2, y+radius/2, x+radius/2, y+radius/2, outline="black", fill="green")