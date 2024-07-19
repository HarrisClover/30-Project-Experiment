'''
This is the main file that initializes the photo gallery application.
'''
import tkinter as tk
from photo_gallery import PhotoGallery
def main():
    root = tk.Tk()
    gallery = PhotoGallery(root)
    gallery.pack()
    root.mainloop()
if __name__ == "__main__":
    main()