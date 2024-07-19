from flask import Flask, render_template, request, redirect, url_for, flash
import smtplib
import random

app = Flask(__name__)
app.secret_key = 'supersecretkey'

@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        email = request.form['email']
        code = generate_verification_code()
        send_email(email, code)
        flash('A verification code has been sent to your email address.', 'info')
        return redirect(url_for('verify', email=email))
    return render_template('home.html')

@app.route('/verify', methods=['GET', 'POST'])
def verify():
    if request.method == 'POST':
        code = request.form['code']
        if code == request.args.get('code'):
            flash('Email verified successfully.', 'success')
            return redirect(url_for('home'))
        else:
            flash('Invalid verification code.', 'danger')
            return redirect(url_for('verify'))
    return render_template('verify.html')

def generate_verification_code():
    return ''.join(random.choice('0123456789') for _ in range(6))

def send_email(to, code):
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login('your-email@gmail.com', 'your-password')
    message = 'Your verification code is: {}'.format(code)
    server.sendmail('your-email@gmail.com', to, message)
    server.quit()

if __name__ == '__main__':
    app.run(debug=True)
