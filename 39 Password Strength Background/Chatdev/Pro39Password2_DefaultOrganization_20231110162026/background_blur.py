'''
Module to calculate the blur degree based on the strength of a password.
'''
def get_blur_degree(strength):
    # Define the mapping of strength to blur degree
    blur_mapping = {
        "WEAK": 100,
        "MEDIUM": 50,
        "STRONG": 0
    }
    return blur_mapping.get(strength, 0)