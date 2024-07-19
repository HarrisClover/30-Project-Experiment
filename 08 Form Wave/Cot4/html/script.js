
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Here you would send the username and password to your server for authentication
    // This is just a basic example and doesn't actually authenticate the user
    console.log('Username: ' + username);
    console.log('Password: ' + password);
});
