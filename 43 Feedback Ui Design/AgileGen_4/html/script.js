
document.getElementById('sendReview').addEventListener('click', function() {
    var selectedFeedback = document.querySelector('input[name="feedback"]:checked');
    if (selectedFeedback) {
        document.getElementById('feedbackForm').style.display = 'none';
        document.getElementById('confirmationMessage').style.display = 'block';
    } else {
        alert('Please select a feedback option.');
    }
});
