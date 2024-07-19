'''
This file contains the ShoppingWebsite class.
'''
from product import Product
from cart import Cart
class ShoppingWebsite:
    def __init__(self):
        self.products = []
        self.cart = Cart()
    def run(self):
        while True:
            print("Welcome to the Shopping Website!")
            print("1. View Products")
            print("2. Add Product to Cart")
            print("3. Remove Product from Cart")
            print("4. View Cart")
            print("5. Exit")
            choice = input("Enter your choice: ")
            if choice == "1":
                self.view_products()
            elif choice == "2":
                self.add_product_to_cart()
            elif choice == "3":
                self.remove_product_from_cart()
            elif choice == "4":
                self.view_cart()
            elif choice == "5":
                print("Thank you for using the Shopping Website!")
                break
            else:
                print("Invalid choice. Please try again.")
    def view_products(self):
        print("Available Products:")
        for product in self.products:
            print(f"{product.name} - ${product.price}")
    def add_product_to_cart(self):
        product_name = input("Enter the name of the product: ")
        product_price = float(input("Enter the price of the product: "))
        product_description = input("Enter the description of the product: ")
        product = Product(product_name, product_price, product_description)
        self.products.append(product)
        print(f"{product.name} added to the website.")
    def remove_product_from_cart(self):
        product_name = input("Enter the name of the product: ")
        product = self.find_product_by_name(product_name)
        if product:
            self.products.remove(product)
            print(f"{product.name} removed from the website.")
        else:
            print("Product not found.")
    def view_cart(self):
        print("Cart:")
        for item in self.cart.items:
            print(f"{item.name} - ${item.price}")
        print(f"Total Price: ${self.cart.get_total_price()}")
    def find_product_by_name(self, name):
        for product in self.products:
            if product.name == name:
                return product
        return None