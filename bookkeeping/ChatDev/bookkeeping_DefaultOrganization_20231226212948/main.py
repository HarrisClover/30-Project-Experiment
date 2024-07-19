class Bookkeeping:
    def __init__(self):
        # Initialize an empty list to store transactions
        self.transactions = []
    def add_transaction(self, transaction):
        # Add a transaction to the list of transactions
        self.transactions.append(transaction)
    def get_transactions(self):
        # Return the list of transactions
        return self.transactions