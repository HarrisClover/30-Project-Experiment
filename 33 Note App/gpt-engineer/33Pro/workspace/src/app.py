from note import Note
from notebook import Notebook

class App:
    """The main application class."""
    def __init__(self):
        self.notebook = Notebook()

    def start(self):
        """Start the application."""
        while True:
            command = input("Enter a command: ")
            if command == "add":
                title = input("Enter the note's title: ")
                content = input("Enter the note's content: ")
                self.notebook.add(Note(title, content))
            elif command == "remove":
                title = input("Enter the title of the note to remove: ")
                note = next((note for note in self.notebook.notes if note.title == title), None)
                if note is not None:
                    self.notebook.remove(note)
                else:
                    print("Note not found.")
            elif command == "search":
                query = input("Enter a search query: ")
                results = self.notebook.search(query)
                for note in results:
                    print(note)
            elif command == "quit":
                break
            else:
                print("Unknown command.")
