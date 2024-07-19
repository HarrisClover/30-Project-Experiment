
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    // Perform validation and authentication here
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);

    // Simulate successful login
    alert('Login successful!');
});
