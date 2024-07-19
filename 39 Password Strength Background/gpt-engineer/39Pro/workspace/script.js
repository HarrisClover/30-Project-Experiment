function checkPasswordStrength(password) {
    var strength = 0;
    if (password.match(/[a-z]+/)) {
        strength += 1;
    }
    if (password.match(/[A-Z]+/)) {
        strength += 1;
    }
    if (password.match(/[0-9]+/)) {
        strength += 1;
    }
    if (password.match(/[$@#&!]+/)) {
        strength += 1;
    }

    var background = document.getElementById('background');
    switch(strength) {
        case 0:
            background.style.filter = 'blur(20px)';
            break;
        case 1:
            background.style.filter = 'blur(15px)';
            break;
        case 2:
            background.style.filter = 'blur(10px)';
            break;
        case 3:
            background.style.filter = 'blur(5px)';
            break;
        case 4:
            background.style.filter = 'blur(0px)';
            break;
    }
}
