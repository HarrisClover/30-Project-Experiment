from typing import List
from note import Note

class Notebook:
    """A class representing a collection of notes."""
    def __init__(self):
        self.notes = []

    def add(self, note: Note):
        """Add a note to the notebook."""
        self.notes.append(note)

    def remove(self, note: Note):
        """Remove a note from the notebook."""
        self.notes.remove(note)

    def search(self, query: str) -> List[Note]:
        """Search for notes that contain the query in their title or content."""
        return [note for note in self.notes if query in note.title or query in note.content]
