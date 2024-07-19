import tkinter as tk
class PhotoGallery(tk.Frame):
    def __init__(self, master=None):
        super().__init__(master)
        self.master = master
        self.images = []  # List to store the images
        self.current_image_index = 0  # Index of the currently displayed image
        # Create the necessary widgets
        self.image_label = tk.Label(self)
        self.image_label.pack()
        self.prev_button = tk.Button(self, text="Previous", command=self.show_previous_image)
        self.prev_button.pack(side="left")
        self.next_button = tk.Button(self, text="Next", command=self.show_next_image)
        self.next_button.pack(side="right")
    def show_previous_image(self):
        if self.current_image_index > 0:
            self.current_image_index -= 1
        self.show_current_image()
    def show_next_image(self):
        if self.current_image_index < len(self.images) - 1:
            self.current_image_index += 1
        self.show_current_image()
    def show_current_image(self):
        image = self.images[self.current_image_index]
        self.image_label.configure(image=image)
        self.image_label.image = image  # Keep a reference to the image to prevent garbage collection
    def add_image(self, image_path):
        image = tk.PhotoImage(file=image_path)
        self.images.append(image)