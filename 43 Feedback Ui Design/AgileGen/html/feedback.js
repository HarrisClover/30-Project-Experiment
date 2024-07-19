
const stars = document.querySelectorAll('.stars img');
const feedbackText = document.querySelector('.feedback-text');
const submitButton = document.querySelector('.submit-button');
const confirmationMessage = document.querySelector('.confirmation-message');
const feedbackList = document.querySelector('.feedback-list');

let selectedRating = 0;

stars.forEach(star => {
    star.addEventListener('click', () => {
        selectedRating = star.dataset.rating;
        stars.forEach(s => s.classList.remove('selected'));
        star.classList.add('selected');
    });
});

submitButton.addEventListener('click', () => {
    if (selectedRating > 0) {
        confirmationMessage.style.display = 'block';
        
        const feedbackItem = document.createElement('div');
        feedbackItem.classList.add('feedback-item');

        const feedbackRating = document.createElement('div');
        feedbackRating.classList.add('feedback-rating');
        feedbackRating.textContent = selectedRating + ' Star' + (selectedRating > 1 ? 's' : '');
        feedbackItem.appendChild(feedbackRating);

        if (feedbackText.value.trim() !== '') {
            const feedbackComment = document.createElement('div');
            feedbackComment.classList.add('feedback-comment');
            feedbackComment.textContent = feedbackText.value;
            feedbackItem.appendChild(feedbackComment);
        }

        feedbackList.appendChild(feedbackItem);

        setTimeout(() => {
            confirmationMessage.style.display = 'none';
        }, 3000);
    } else {
        alert('Please select a satisfaction rating.');
    }
});
