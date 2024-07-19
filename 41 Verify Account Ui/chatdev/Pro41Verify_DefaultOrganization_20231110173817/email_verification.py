'''
This file handles sending the verification code to the user's email address.
'''
import smtplib
from email.message import EmailMessage
import secrets
import os
def send_verification_code(email, verification_code):
    message = f"Your verification code is: {verification_code}"
    msg = EmailMessage()
    msg.set_content(message)
    msg['Subject'] = 'Email Verification Code'
    msg['From'] = os.environ.get('EMAIL_ADDRESS')
    msg['To'] = email
    with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
        smtp.starttls()
        smtp.login(os.environ.get('EMAIL_ADDRESS'), os.environ.get('EMAIL_PASSWORD'))
        smtp.send_message(msg)
def generate_verification_code():
    # Generate a secure random 6-digit verification code
    return secrets.randbelow(1000000)