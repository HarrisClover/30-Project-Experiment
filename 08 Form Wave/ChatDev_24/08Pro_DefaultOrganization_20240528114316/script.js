function authenticateUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Make an AJAX request to the server-side authentication logic
    // Replace the URL with the appropriate endpoint
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/authenticate", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            if (response.authenticated) {
                alert("Login successful!");
            } else {
                alert("Invalid username or password!");
            }
        }
    };
    xhr.send(JSON.stringify({ username: username, password: password }));
    return false; // Prevent form submission
}