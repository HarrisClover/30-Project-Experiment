document.addEventListener("keydown", function(event) {
    var eventDetails = document.getElementById("eventDetails");
    // Create elements for each event property
    var keyElement = document.createElement("p");
    keyElement.textContent = "event.key: " + event.key;
    var keyCodeElement = document.createElement("p");
    keyCodeElement.textContent = "event.keyCode: " + event.keyCode;
    var codeElement = document.createElement("p");
    codeElement.textContent = "event.code: " + event.code;
    // Clear existing content
    eventDetails.innerHTML = "";
    // Append the elements to the eventDetails element
    eventDetails.appendChild(keyElement);
    eventDetails.appendChild(document.createElement("br")); // Add a line break
    eventDetails.appendChild(keyCodeElement);
    eventDetails.appendChild(document.createElement("br")); // Add a line break
    eventDetails.appendChild(codeElement);
});
