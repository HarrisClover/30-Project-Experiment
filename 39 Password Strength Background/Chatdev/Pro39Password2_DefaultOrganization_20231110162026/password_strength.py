'''
Module to calculate the strength of a password.
'''
from password_strength import PasswordStats
def get_password_strength(password):
    stats = PasswordStats(password)
    return stats.strength