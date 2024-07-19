
document.getElementById("verificationForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var verificationCode = document.getElementById("verificationCode").value;
  var errorContainer = document.getElementById("errorContainer");
  var successContainer = document.getElementById("successContainer");

  // Validate the entered code
  if (verificationCode.length !== 6 || isNaN(verificationCode)) {
    errorContainer.innerHTML = "Invalid verification code. Please enter a 6-digit number.";
    errorContainer.style.display = "block";
    successContainer.style.display = "none";
    return;
  }

  // Verify the entered code
  // Replace this with your server-side code to compare the entered code with the stored code
  var storedCode = "123456"; // Example stored code
  if (verificationCode === storedCode) {
    errorContainer.style.display = "none";
    successContainer.innerHTML = "Email address verified successfully!";
    successContainer.style.display = "block";
  } else {
    errorContainer.innerHTML = "Incorrect verification code. Please try again.";
    errorContainer.style.display = "block";
    successContainer.style.display = "none";
  }
});
