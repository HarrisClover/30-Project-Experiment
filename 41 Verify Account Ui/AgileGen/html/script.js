document.getElementById("confirmButton").addEventListener("click", function() {
  var verificationCode1 = document.getElementById("verificationCode1").value;
  var verificationCode2 = document.getElementById("verificationCode2").value;
  var verificationCode3 = document.getElementById("verificationCode3").value;
  var verificationCode4 = document.getElementById("verificationCode4").value;
  var verificationCode5 = document.getElementById("verificationCode5").value;
  var verificationCode6 = document.getElementById("verificationCode6").value;
  var verificationCode = verificationCode1 + verificationCode2 + verificationCode3 + verificationCode4 + verificationCode5 + verificationCode6;
  if (verificationCode === "123456") {
    alert("Email address confirmed!");
  } else {
    alert("Incorrect verification code. Please try again.");
  }
});

document.getElementById("resendCodeLink").addEventListener("click", function(event) {
  event.preventDefault();
  alert("New verification code sent to cool_guy@email.com");
});
