
document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var passwordLength = document.getElementById("passwordLength").value;
    var includeLetters = document.getElementById("includeLetters").checked;
    var includeNumbers = document.getElementById("includeNumbers").checked;

    var password = generatePassword(passwordLength, includeLetters, includeNumbers);

    displayPassword(password, passwordLength, includeLetters, includeNumbers);
});

function generatePassword(length, includeLetters, includeNumbers) {
    var characters = "";
    var password = "";

    if (includeLetters) {
        characters += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (includeNumbers) {
        characters += "0123456789";
    }

    for (var i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password;
}

function displayPassword(password, length, includeLetters, includeNumbers) {
    var passwordGeneratedPage = document.createElement("div");
    passwordGeneratedPage.innerHTML = "<h1>Password Generated</h1>" +
        "<p>Generated Password: " + password + "</p>" +
        "<p>Length: " + length + "</p>" +
        "<p>Criteria: " + (includeLetters ? "Letters " : "") + (includeNumbers ? "Numbers" : "") + "</p>";

    document.body.innerHTML = "";
    document.body.appendChild(passwordGeneratedPage);
}
