
document.getElementById('verification-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var enteredCode = document.getElementById('verification-code').value;
    var storedCode = localStorage.getItem('verificationCode');

    if (enteredCode === storedCode) {
        document.getElementById('message').textContent = 'Email verified successfully!';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').textContent = 'Invalid verification code. Please try again.';
        document.getElementById('message').style.color = 'red';
    }
});
