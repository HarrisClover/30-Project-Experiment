import tkinter as tk
from PIL import Image, ImageTk
from movie import Movie
class MovieStreamingApp(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Movie Streaming Service")
        self.movies = []
        self.search_results = []
        self.search_var = tk.StringVar()
        self.search_var.trace("w", self.search_movies)
        self.search_entry = tk.Entry(self, textvariable=self.search_var)
        self.search_entry.pack()
        self.search_results_frame = tk.Frame(self)
        self.search_results_frame.pack()
        # Add movie objects to the movies list
        self.movies.append(Movie("Movie 1", "path/to/cover_image1.jpg", 4.5, "Summary 1"))
        self.movies.append(Movie("Movie 2", "path/to/cover_image2.jpg", 3.8, "Summary 2"))
        # Add more movies as needed