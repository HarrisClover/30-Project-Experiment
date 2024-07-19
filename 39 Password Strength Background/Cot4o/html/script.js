document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const strength = getPasswordStrength(password);
    const blurValue = 10 - strength; // Adjust this value as needed
    document.querySelector('.background').style.filter = `blur(${blurValue}px)`;
});

function getPasswordStrength(password) {
    let strength = 0;
    if (password.length > 5) strength += 1;
    if (password.length > 10) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    return strength;
}