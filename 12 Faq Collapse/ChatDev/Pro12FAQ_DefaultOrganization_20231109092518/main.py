'''
This code creates a web page to display the FAQ section with drop-down arrows for each question.
'''
import tkinter as tk
from tkinter import ttk
def toggle_answer(event):
    answer_label = event.widget.master.winfo_children()[1]
    if answer_label.cget("text") == "":
        answer_label.config(text=event.widget.answer)
        event.widget.config(text="▼")
    else:
        answer_label.config(text="")
        event.widget.config(text="►")
root = tk.Tk()
# Create a frame to hold the FAQ section
faq_frame = ttk.Frame(root)
faq_frame.pack()
# Create a list of questions and answers
faqs = [
    {
        "question": "Question 1",
        "answer": "Answer 1"
    },
    {
        "question": "Question 2",
        "answer": "Answer 2"
    },
    {
        "question": "Question 3",
        "answer": "Answer 3"
    }
]
# Create a label and drop-down arrow for each question
for faq in faqs:
    question_label = ttk.Label(faq_frame, text=faq["question"])
    question_label.pack()
    arrow_label = ttk.Label(faq_frame, text="►")
    arrow_label.pack()
    arrow_label.bind("<Button-1>", toggle_answer)
    arrow_label.answer = faq["answer"]
    answer_label = ttk.Label(faq_frame, text="")
    answer_label.pack()
root.mainloop()