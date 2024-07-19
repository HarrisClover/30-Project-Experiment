'''
This file contains the CurrencyConverter class which handles the currency conversion logic.
'''
class CurrencyConverter:
    def __init__(self):
        # Initialize currency conversion rates
        self.rates = {
            "USD": 1.0,
            "EUR": 0.85,
            "GBP": 0.75
        }
    def convert(self, amount, from_currency, to_currency):
        if from_currency == to_currency:
            return amount
        if from_currency not in self.rates or to_currency not in self.rates:
            raise ValueError("Invalid currency.")
        return amount * self.rates[to_currency] / self.rates[from_currency]