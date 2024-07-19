# test_reports.py
'''
Test reports for the content placeholder application.
'''
import unittest
from unittest.mock import patch
import tkinter as tk
from main import App
from placeholder import Placeholder
class TestReports(unittest.TestCase):
    def setUp(self):
        self.root = tk.Tk()
        self.app = App()
        self.placeholder = Placeholder(self.app)
    def tearDown(self):
        self.root.destroy()
    def test_load_content(self):
        content = "Hello, world!"
        self.app.load_content()
        self.assertEqual(self.placeholder.placeholder_text.get(), content)
if __name__ == "__main__":
    unittest.main()