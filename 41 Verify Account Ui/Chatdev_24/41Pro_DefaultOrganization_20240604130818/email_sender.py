'''
This file contains the logic for sending the verification code to the user's email address.
'''
import smtplib
from email.message import EmailMessage
import random
from config import EMAIL_ADDRESS, EMAIL_PASSWORD
def send_verification_code(email):
    # Generate a random 6-digit verification code
    verification_code = str(random.randint(100000, 999999))
    # Create the email message
    msg = EmailMessage()
    msg.set_content(f"Your verification code is: {verification_code}")
    msg['Subject'] = "Email Verification"
    msg['From'] = EMAIL_ADDRESS
    msg['To'] = email
    # Send the email
    with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
        smtp.starttls()
        smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
        smtp.send_message(msg)