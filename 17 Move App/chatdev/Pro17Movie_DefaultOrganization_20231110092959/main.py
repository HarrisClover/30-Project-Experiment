'''
This is the main file for the movie streaming service.
'''
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
    def search_movies(self, *args):
        query = self.search_var.get().lower()
        self.search_results = [movie for movie in self.movies if query in movie.title.lower()]
        self.display_search_results()
    def display_search_results(self):
        for widget in self.search_results_frame.winfo_children():
            widget.destroy()
        for movie in self.search_results:
            movie_frame = tk.Frame(self.search_results_frame)
            movie_frame.pack()
            title_label = tk.Label(movie_frame, text=movie.title)
            title_label.pack()
            cover_image_label = tk.Label(movie_frame, image=movie.cover_image)
            cover_image_label.pack()
            rating_label = tk.Label(movie_frame, text=f"Rating: {movie.rating}")
            rating_label.pack()
            summary_label = tk.Label(movie_frame, text=movie.summary)
            summary_label.pack()
if __name__ == "__main__":
    app = MovieStreamingApp()
    app.mainloop()