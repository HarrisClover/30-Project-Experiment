'''
This file contains the Transaction class.
'''
class Transaction:
    def __init__(self, date, description, amount):
        self.date = date
        self.description = description
        self.amount = amount
    def __str__(self):
        return f"Date: {self.date}, Description: {self.description}, Amount: {self.amount}"