import tkinter as tk

def log_water_consumption():
    # Code to log water consumption
    pass

root = tk.Tk()

# Create glass icons
for i in range(5):
    glass_icon = tk.Button(root, text='🥛', command=log_water_consumption)
    glass_icon.pack(side='left', padx=5)

root.mainloop()