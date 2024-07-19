document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'test' && password === 'test') {
        document.getElementById('message').textContent = 'Welcome, ' + username + '!';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').textContent = 'Incorrect login details. Please try again.';
        document.getElementById('message').style.color = 'red';
    }
});
