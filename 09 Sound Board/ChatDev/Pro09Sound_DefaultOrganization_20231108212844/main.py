'''
This is the main file that will be executed to run the website.
'''
import tkinter as tk
from tkinter import messagebox
from playsound import playsound
class Card:
    def __init__(self, word, sound):
        self.word = word
        self.sound = sound
class CardGame:
    def __init__(self, cards):
        self.cards = cards
    def play_sound(self, card):
        playsound(card.sound)
    def create_card_buttons(self, root):
        for i, card in enumerate(self.cards):
            button = tk.Button(root, text=card.word, command=lambda card=card: self.play_sound(card))
            button.grid(row=i // 3, column=i % 3, padx=10, pady=10)
def main():
    # Create cards
    cards = [
        Card("Hello", "hello_sound.wav"),
        Card("Goodbye", "goodbye_sound.wav"),
        Card("Thank you", "thankyou_sound.wav")
    ]
    # Create card game
    card_game = CardGame(cards)
    # Create GUI window
    root = tk.Tk()
    root.title("Card Game")
    # Create card buttons
    card_game.create_card_buttons(root)
    # Run GUI
    root.mainloop()
if __name__ == "__main__":
    main()