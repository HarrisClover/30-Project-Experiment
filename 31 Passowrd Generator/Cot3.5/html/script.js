
document.getElementById("generate").addEventListener("click", function() {
    var length = document.getElementById("length").value;
    var uppercase = document.getElementById("uppercase").checked;
    var lowercase = document.getElementById("lowercase").checked;
    var numbers = document.getElementById("numbers").checked;
    
    var characters = "";
    var password = "";
    
    if (uppercase) {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    
    if (lowercase) {
        characters += "abcdefghijklmnopqrstuvwxyz";
    }
    
    if (numbers) {
        characters += "0123456789";
    }
    
    for (var i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    document.getElementById("password").value = password;
});
