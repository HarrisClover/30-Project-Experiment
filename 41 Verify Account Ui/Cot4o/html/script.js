
const verificationCodeInput = document.getElementById('verificationCode');
const verifyButton = document.getElementById('verifyButton');

verificationCodeInput.addEventListener('input', function() {
    const code = verificationCodeInput.value;
    if (code.length === 6 && /^\d+$/.test(code)) {
        verifyButton.disabled = false;
    } else {
        verifyButton.disabled = true;
    }
});

verifyButton.addEventListener('click', function() {
    const code = verificationCodeInput.value;
    // Here you would typically send the code to your server for verification
    alert(`Verification code ${code} submitted!`);
});
