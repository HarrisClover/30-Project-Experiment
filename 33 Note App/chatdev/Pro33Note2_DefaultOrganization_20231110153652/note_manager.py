'''
This file contains the NoteManager class which handles saving and loading notes.
'''
import tkinter as tk
class NoteManager:
    def __init__(self):
        self.file_path = "note.txt"
    def save(self, note):
        """
        Saves the given note to a file.
        Args:
            note (str): The note to be saved.
        """
        with open(self.file_path, "w") as file:
            file.write(note)
    def load(self):
        """
        Loads a note from a file.
        Returns:
            str: The loaded note.
        """
        try:
            with open(self.file_path, "r") as file:
                return file.read()
        except FileNotFoundError:
            return ""