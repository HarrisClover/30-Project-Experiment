'''
This is the main file of the currency converter application.
It imports the necessary modules and initializes the GUI.
'''
import tkinter as tk
from tkinter import messagebox
from currency_converter import CurrencyConverter
class CurrencyConverterApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Currency Converter")
        self.converter = CurrencyConverter()
        self.amount_label = tk.Label(self.root, text="Amount:")
        self.amount_label.pack()
        self.amount_entry = tk.Entry(self.root)
        self.amount_entry.pack()
        self.from_label = tk.Label(self.root, text="From:")
        self.from_label.pack()
        self.from_currency = tk.StringVar()
        self.from_currency.set("USD")
        self.from_currency_dropdown = tk.OptionMenu(self.root, self.from_currency, "USD", "EUR", "GBP")
        self.from_currency_dropdown.pack()
        self.to_label = tk.Label(self.root, text="To:")
        self.to_label.pack()
        self.to_currency = tk.StringVar()
        self.to_currency.set("EUR")
        self.to_currency_dropdown = tk.OptionMenu(self.root, self.to_currency, "USD", "EUR", "GBP")
        self.to_currency_dropdown.pack()
        self.convert_button = tk.Button(self.root, text="Convert", command=self.convert)
        self.convert_button.pack()
        self.result_label = tk.Label(self.root, text="")
        self.result_label.pack()
    def convert(self):
        try:
            amount = float(self.amount_entry.get())
            from_currency = self.from_currency.get()
            to_currency = self.to_currency.get()
            result = self.converter.convert(amount, from_currency, to_currency)
            self.result_label.config(text=f"{amount} {from_currency} = {result} {to_currency}")
        except ValueError:
            messagebox.showerror("Error", "Invalid amount entered.")
        except KeyError:
            messagebox.showerror("Error", "Invalid currency selected.")
if __name__ == "__main__":
    root = tk.Tk()
    app = CurrencyConverterApp(root)
    root.mainloop()