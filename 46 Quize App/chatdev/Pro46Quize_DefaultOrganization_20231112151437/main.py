'''
This is the main file of the website with questions about computers. It handles the user interface and interaction.
'''
import tkinter as tk
from tkinter import messagebox
class Question:
    def __init__(self, question, options, answer):
        """
        Initialize a Question object.
        Args:
            question (str): The question text.
            options (list): A list of strings representing the answer options.
            answer (int): The index of the correct answer in the options list.
        """
        self.question = question
        self.options = options
        self.answer = answer
class QuizApp:
    def __init__(self, questions):
        """
        Initialize the QuizApp.
        Args:
            questions (list): A list of Question objects representing the quiz questions.
        """
        self.questions = questions
        self.current_question_index = 0
        self.score = 0
        self.root = tk.Tk()
        self.root.title("Computer Quiz")
        self.question_label = tk.Label(self.root, text="")
        self.question_label.pack()
        self.option_buttons = []
        for i in range(4):
            button = tk.Button(self.root, text="", command=lambda i=i: self.check_answer(i))
            button.pack()
            self.option_buttons.append(button)
        self.next_question()
        self.root.mainloop()
    def next_question(self):
        """
        Display the next question in the quiz or show the result if all questions have been answered.
        """
        if self.current_question_index < len(self.questions):
            question = self.questions[self.current_question_index]
            self.question_label.config(text=question.question)
            for i, option in enumerate(question.options):
                self.option_buttons[i].config(text=option)
            self.current_question_index += 1
        else:
            self.show_result()
    def check_answer(self, selected_index):
        """
        Check the selected answer and update the score.
        Args:
            selected_index (int): The index of the selected answer option.
        """
        question = self.questions[self.current_question_index - 1]
        if selected_index == question.answer:
            self.score += 1
        self.next_question()
    def show_result(self):
        """
        Display the final quiz result.
        """
        messagebox.showinfo("Quiz Result", f"You scored {self.score}/{len(self.questions)}")
if __name__ == "__main__":
    questions = [
        Question("What is the capital of France?", ["London", "Paris", "Berlin", "Madrid"], 1),
        Question("What is the largest planet in our solar system?", ["Mars", "Jupiter", "Saturn", "Earth"], 1),
        Question("What is the main component of air?", ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], 2),
        Question("What is the symbol for the chemical element gold?", ["Au", "Ag", "Fe", "Cu"], 0),
        Question("What is the largest organ in the human body?", ["Heart", "Liver", "Brain", "Skin"], 3)
    ]
    quiz_app = QuizApp(questions)