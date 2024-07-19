import re

class PasswordStrengthChecker:
    """
    This class contains methods to check the strength of the password.
    """
    def check_strength(self, password):
        """
        This method checks the strength of the password.
        """
        if len(password) < 8:
            return 1
        elif re.search('[0-9]',password) is None:
            return 2
        elif re.search('[a-z]',password) is None:
            return 3
        elif re.search('[A-Z]',password) is None:
            return 4
        elif re.search('[$#@]',password) is None:
            return 5
        else:
            return 6
