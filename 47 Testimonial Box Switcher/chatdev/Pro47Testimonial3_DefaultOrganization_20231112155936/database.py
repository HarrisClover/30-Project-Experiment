'''
This file contains the database operations for the Testimonial Box Switcher website.
'''
import sqlite3
DATABASE = 'testimonials.db'
def create_table():
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS testimonials (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            message TEXT
        )
    ''')
    conn.commit()
    conn.close()
def get_testimonials():
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM testimonials')
    testimonials = cursor.fetchall()
    conn.close()
    return [{'name': name, 'message': message} for _, name, message in testimonials]
def add_testimonial(name, message):
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()
    cursor.execute('INSERT INTO testimonials (name, message) VALUES (?, ?)', (name, message))
    conn.commit()
    conn.close()