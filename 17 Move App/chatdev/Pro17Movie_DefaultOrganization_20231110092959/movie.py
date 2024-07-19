from PIL import Image, ImageTk
class Movie:
    def __init__(self, title, cover_image_path, rating, summary):
        self.title = title
        self.cover_image = self.load_cover_image(cover_image_path)
        self.rating = rating
        self.summary = summary
    def load_cover_image(self, cover_image_path):
        cover_image = Image.open(cover_image_path)
        cover_image = cover_image.resize((200, 300))  # Adjust the size as per your requirement
        return ImageTk.PhotoImage(cover_image)