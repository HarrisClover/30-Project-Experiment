from tkinter import Tk, Label, Button, messagebox
class ProjectTrianglePage(Tk):
    def __init__(self):
        super().__init__()
        self.title("Project Triangle")
        self.geometry("400x300")
        self.create_widgets()
    def create_widgets(self):
        label = Label(self, text="Select two options:")
        label.pack(pady=10)
        good_button = Button(self, text="Good", command=self.show_message_good)
        good_button.pack(pady=5)
        cheap_button = Button(self, text="Cheap", command=self.show_message_cheap)
        cheap_button.pack(pady=5)
        fast_button = Button(self, text="Fast", command=self.show_message_fast)
        fast_button.pack(pady=5)
    def show_message_good(self):
        messagebox.showinfo("Result", "You selected Good and Cheap")
    def show_message_cheap(self):
        messagebox.showinfo("Result", "You selected Cheap and Fast")
    def show_message_fast(self):
        messagebox.showinfo("Result", "You selected Good and Fast")
if __name__ == "__main__":
    app = ProjectTrianglePage()
    app.mainloop()