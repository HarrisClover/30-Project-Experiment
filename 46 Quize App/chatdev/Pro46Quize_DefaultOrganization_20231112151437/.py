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