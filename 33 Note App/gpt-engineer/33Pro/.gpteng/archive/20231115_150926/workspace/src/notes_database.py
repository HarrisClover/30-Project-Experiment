from note import Note
import sqlite3

class NotesDatabase:
    def __init__(self):
        self.conn = sqlite3.connect('notes.db')
        self.cursor = self.conn.cursor()
        self.cursor.execute('''
            CREATE TABLE IF NOT EXISTS notes
            (id INTEGER PRIMARY KEY, title TEXT, content TEXT, date TEXT)
        ''')

    def add_note(self, note):
        # TODO: Implement adding a note to the database
        pass

    def update_note(self, note):
        # TODO: Implement updating a note in the database
        pass

    def delete_note(self, note_id):
        # TODO: Implement deleting a note from the database
        pass

    def get_notes(self):
        # TODO: Implement retrieving all notes from the database
        pass
