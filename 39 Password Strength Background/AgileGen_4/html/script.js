
document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const strengthIndicator = document.getElementById('strength-indicator');
    let strength = getPasswordStrength(password);
    strengthIndicator.textContent = 'Strength: ' + strength.text;
    document.body.style.filter = `blur(${strength.blur}px)`;
});

function getPasswordStrength(password) {
    const length = password.length;
    let strength = { text: "Weak", blur: 2 };

    if (length > 5 && /[a-z]/.test(password) && /[0-9]/.test(password)) {
        strength = { text: "Medium", blur: 1 };
    }
    if (length > 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) {
        strength = { text: "Strong", blur: 0 };
    }

    return strength;
}
