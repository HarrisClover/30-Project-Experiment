'''
This is the main file that will create the web page with the dynamic loading symbol.
'''
import tkinter as tk
class KineticLoader:
    def __init__(self, root):
        """
        Initialize the KineticLoader class.
        Args:
            root (tk.Tk): The root Tkinter window.
        """
        self.root = root
        self.canvas = tk.Canvas(self.root, width=400, height=400)
        self.canvas.pack()
        self.triangle1 = self.canvas.create_polygon(100, 100, 300, 100, 200, 300, fill='white')
        self.triangle2 = self.canvas.create_polygon(100, 300, 300, 300, 200, 100, fill='black')
        self.animate()
    def animate(self):
        """
        Animate the dynamic loading symbol.
        This method continuously updates the fill color of the triangles to create the dynamic effect.
        """
        self.canvas.itemconfigure(self.triangle1, fill='black' if self.canvas.itemcget(self.triangle1, 'fill') == 'white' else 'white')
        self.canvas.itemconfigure(self.triangle2, fill='white' if self.canvas.itemcget(self.triangle2, 'fill') == 'black' else 'black')
        self.root.after(500, self.animate)
if __name__ == "__main__":
    root = tk.Tk()
    root.title("Kinetic Loader")
    loader = KineticLoader(root)
    root.mainloop()