import tkinter as tk
from clock import Clock
if __name__ == "__main__":
    root = tk.Tk()
    clock = Clock(root)
    clock.pack()
    root.mainloop()