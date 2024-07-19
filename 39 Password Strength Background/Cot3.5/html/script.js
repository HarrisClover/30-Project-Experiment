
const passwordInput = document.getElementById('passwordInput');
const strengthIndicator = document.getElementById('strengthIndicator');

passwordInput.addEventListener('input', updatePasswordStrength);

function updatePasswordStrength() {
    const password = passwordInput.value;
    const strength = calculatePasswordStrength(password);

    strengthIndicator.innerHTML = '';

    if (strength === 'weak') {
        strengthIndicator.innerHTML = '<div class="weak"></div>';
    } else if (strength === 'medium') {
        strengthIndicator.innerHTML = '<div class="medium"></div>';
    } else if (strength === 'strong') {
        strengthIndicator.innerHTML = '<div class="strong"></div>';
    }
}

function calculatePasswordStrength(password) {
    // Password strength calculation algorithm goes here
    // Return 'weak', 'medium', or 'strong' based on the password complexity
}

passwordInput.addEventListener('input', updateBackgroundBlur);

function updateBackgroundBlur() {
    const password = passwordInput.value;
    const strength = calculatePasswordStrength(password);

    if (strength === 'weak') {
        document.body.style.filter = 'blur(0)';
    } else if (strength === 'medium') {
        document.body.style.filter = 'blur(5px)';
    } else if (strength === 'strong') {
        document.body.style.filter = 'blur(10px)';
    }
}

function validatePassword() {
    const password = passwordInput.value;
    const strength = calculatePasswordStrength(password);

    if (strength === 'weak') {
        alert('Password is too weak. Please choose a stronger password.');
    } else {
        // Proceed to the next step
    }
}

passwordInput.addEventListener('input', validatePassword);
