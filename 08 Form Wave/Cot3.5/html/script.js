
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  // Perform authentication logic here
  
  // Example code to simulate successful login
  if (username === "admin" && password === "password") {
    alert("Login successful!");
  } else {
    alert("Invalid username or password.");
  }
});
