'''
This is the main file of the web system code with random roll call function.
'''
import tkinter as tk
import random
class RollCallSystemGUI:
    def __init__(self, master):
        '''
        Initializes the RollCallSystemGUI class.
        Args:
            master: The root Tkinter window.
        Returns:
            None
        '''
        self.master = master
        self.master.title("Roll Call System")
        self.students = ["Alice", "Bob", "Charlie", "David", "Eve"]
        self.roll_call_button = tk.Button(self.master, text="Roll Call", command=self.roll_call)
        self.roll_call_button.pack()
        self.result_label = tk.Label(self.master, text="")
        self.result_label.pack()
    def roll_call(self):
        '''
        Performs a random roll call by selecting a student from the list of students.
        Args:
            None
        Returns:
            None
        '''
        random_student = random.choice(self.students)
        self.result_label.config(text="Roll Call: " + random_student)
if __name__ == "__main__":
    root = tk.Tk()
    app = RollCallSystemGUI(root)
    root.mainloop()