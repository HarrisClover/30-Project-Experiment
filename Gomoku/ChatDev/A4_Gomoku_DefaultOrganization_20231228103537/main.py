'''
This is the main file for the Gomoku game.
'''
import tkinter as tk
from tkinter import messagebox
from game import Game
class GomokuApp(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Gomoku")
        self.geometry("400x400")
        self.game = Game()
        self.canvas = tk.Canvas(self, width=400, height=400)
        self.canvas.pack()
        self.canvas.bind("<Button-1>", self.on_click)
        self.draw_board()
    def draw_board(self):
        self.canvas.delete("all")
        for i in range(15):
            self.canvas.create_line(0, i * 25, 400, i * 25)
            self.canvas.create_line(i * 25, 0, i * 25, 400)
    def on_click(self, event):
        x = event.x // 25
        y = event.y // 25
        if 0 <= x < 15 and 0 <= y < 15:
            if self.game.make_move(x, y):
                self.draw_piece(x, y)
                if self.game.check_win(x, y):
                    self.show_winner()
    def draw_piece(self, x, y):
        if not (0 <= x < 15 and 0 <= y < 15):
            return
        color = "black" if self.game.current_player == 1 else "white"
        self.canvas.create_oval(x * 25, y * 25, (x + 1) * 25, (y + 1) * 25, fill=color)
    def show_winner(self):
        winner = "Black" if self.game.current_player == 1 else "White"
        messagebox.showinfo("Game Over", f"{winner} wins!")
        self.reset_game()
    def reset_game(self):
        self.game.reset()
        self.draw_board()
if __name__ == "__main__":
    app = GomokuApp()
    app.mainloop()