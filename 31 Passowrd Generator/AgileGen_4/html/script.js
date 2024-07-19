
function generatePassword() {
    const length = document.getElementById('passwordLength').value;
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeLowercase = document.getElementById('includeLowercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const passwordOutput = document.getElementById('generatedPassword');

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';

    let validChars = '';
    if (includeUppercase) validChars += uppercaseChars;
    if (includeLowercase) validChars += lowercaseChars;
    if (includeNumbers) validChars += numberChars;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * validChars.length);
        generatedPassword += validChars[index];
    }

    passwordOutput.value = generatedPassword;
}

function regeneratePassword() {
    generatePassword();
}
