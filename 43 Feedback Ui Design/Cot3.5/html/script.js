
function sendFeedback(option) {
    // Step 4: After selecting an option, the user clicks on the "Send Review" button.
    // Step 5: The web page processes the user's feedback and submits it.
    // Step 6: The user receives a confirmation message indicating that their feedback has been successfully submitted.
    document.getElementById("feedback-options").style.display = "none";
    document.getElementById("confirmation-message").style.display = "block";
    
    // Step 8: The customer support team receives the feedback and can analyze it to improve their services if necessary.
    console.log("Feedback received: " + option);
}
