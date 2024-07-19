'''
The code creates a GUI window with three radio buttons for the satisfaction options (Unhappy, Neutral, Satisfied) and a "Send Review" button. When the user clicks the button, the `submit_review` function is called, which retrieves the selected option and performs any necessary actions based on it.
'''
import tkinter as tk
def submit_review():
    selected_option = satisfaction_var.get()
    # Perform actions based on the selected option
    print("Selected option:", selected_option)
root = tk.Tk()
root.title("Customer Support Review")
# Create a variable to store the selected satisfaction level
satisfaction_var = tk.StringVar()
# Create radio buttons for the satisfaction options
unhappy_radio = tk.Radiobutton(root, text="Unhappy", variable=satisfaction_var, value="Unhappy")
neutral_radio = tk.Radiobutton(root, text="Neutral", variable=satisfaction_var, value="Neutral")
satisfied_radio = tk.Radiobutton(root, text="Satisfied", variable=satisfaction_var, value="Satisfied")
# Create a button to submit the review
submit_button = tk.Button(root, text="Send Review", command=submit_review)
# Arrange the components in the GUI
unhappy_radio.pack()
neutral_radio.pack()
satisfied_radio.pack()
submit_button.pack()
root.mainloop()