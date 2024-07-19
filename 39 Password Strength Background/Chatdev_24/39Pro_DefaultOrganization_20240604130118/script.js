function checkPasswordStrength(password) {
    var strength = 0;
    if (password.length >= 8) {
        strength += 1;
    }
    if (password.match(/[a-z]/)) {
        strength += 1;
    }
    if (password.match(/[A-Z]/)) {
        strength += 1;
    }
    if (password.match(/[0-9]/)) {
        strength += 1;
    }
    if (password.match(/[$@#&!]/)) {
        strength += 1;
    }
    var passwordStrengthElement = document.getElementById("password-strength");
    var passwordStrengthLabelElement = document.getElementById("password-strength-label");
    passwordStrengthElement.className = "";
    if (strength === 0) {
        passwordStrengthElement.classList.add("weak");
        passwordStrengthLabelElement.textContent = "Weak";
    } else if (strength <= 2) {
        passwordStrengthElement.classList.add("medium");
        passwordStrengthLabelElement.textContent = "Medium";
    } else {
        passwordStrengthElement.classList.add("strong");
        passwordStrengthLabelElement.textContent = "Strong";
    }
}