'''
This file handles the database operations for storing and retrieving reminders.
'''
import sqlite3
class ReminderDatabase:
    def __init__(self, db_file):
        self.conn = sqlite3.connect(db_file)
        self.create_table()
    def create_table(self):
        cursor = self.conn.cursor()
        cursor.execute("CREATE TABLE IF NOT EXISTS reminders (event TEXT, datetime TEXT)")
        self.conn.commit()
    def add_reminder(self, event, datetime):
        cursor = self.conn.cursor()
        cursor.execute("INSERT INTO reminders VALUES (?, ?)", (event, datetime.strftime("%Y-%m-%d %H:%M")))
        self.conn.commit()
    def get_reminders(self):
        cursor = self.conn.cursor()
        cursor.execute("SELECT * FROM reminders")
        return cursor.fetchall()