
document.getElementById('generate').addEventListener('click', function() {
    var length = document.getElementById('length').value;
    var lowercase = document.getElementById('lowercase').checked;
    var uppercase = document.getElementById('uppercase').checked;
    var numbers = document.getElementById('numbers').checked;
    var symbols = document.getElementById('symbols').checked;

    var password = generatePassword(length, lowercase, uppercase, numbers, symbols);

    document.getElementById('password-display').innerText = password;
});

function generatePassword(length, lowercase, uppercase, numbers, symbols) {
    var all = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+~`|}{[]:;?><,./-=';
    var password = '';

    for (var i = 0; i < length; i++) {
        password += all.charAt(Math.floor(Math.random() * all.length));
    }

    return password;
}
