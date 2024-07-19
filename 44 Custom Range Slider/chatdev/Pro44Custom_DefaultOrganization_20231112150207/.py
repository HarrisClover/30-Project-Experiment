'''
This file contains the logic for handling the submitted value from the slider.
'''
def handle_value(value):
    # Scale the value to a range of 0 to 100
    processed_value = value * 100 / 255  
    return processed_value