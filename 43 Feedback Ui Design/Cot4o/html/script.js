
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const satisfaction = formData.get('satisfaction');
    alert(`Thank you for your feedback! You selected: ${satisfaction}`);
    // Here you can add code to send the feedback to the server
});
