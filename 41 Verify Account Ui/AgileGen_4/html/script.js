const validCode = "123456";

function verifyCode() {
    const inputs = document.querySelectorAll('.code-box');
    const code = Array.from(inputs).map(input => input.value).join('');
    const message = document.getElementById('message');
    if (code === validCode) {
        message.textContent = "Email verified successfully!";
        message.style.color = "green";
    } else if (code.length < 6) {
        message.textContent = "Incomplete code, please enter all 6 digits.";
    } else {
        message.textContent = "Invalid code, please try again.";
    }
}

function resendCode() {
    // Simulate resending the code
    alert("Verification code has been resent to your email.");
}
