'''
This file contains the Cart class.
'''
class Cart:
    def __init__(self):
        self.items = []
    def add_item(self, product):
        self.items.append(product)
    def remove_item(self, product):
        self.items.remove(product)
    def get_total_price(self):
        total_price = 0
        for item in self.items:
            total_price += item.price
        return total_price